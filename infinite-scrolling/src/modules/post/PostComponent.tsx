import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Col, Rate, Row, Skeleton, Tag, Typography } from 'antd'
import { isArray, isEmpty } from 'lodash'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { getPost } from '../../utils/post/getPost'
import MainLayoutComponent from '../layout/MainLayoutComponent'
import { Post } from './model'

const PostComponent = () => {
    const { id } = useParams()

    const queryPost = useQuery({
        queryKey: ['posts '],
        queryFn: () => getPost({ id: id }),
        initialData: new Post(),
        placeholderData: keepPreviousData
    })


    if (queryPost.isFetching) {
        return <MainLayoutComponent>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </MainLayoutComponent>
    }

    const post: Post = queryPost.data

    return (
        <MainLayoutComponent>
            <Row className='post' justify={'start'} gutter={[10, 10]}>

                <Col xs={24}>
                    <h1>
                        {post.title}
                    </h1>
                    <div>
                        <Typography.Text strong>
                            {post.price} USD
                        </Typography.Text>
                    </div>
                    <div>
                        <Tag color='green'>-{post.discountPercentage} %</Tag>
                        <Rate disabled defaultValue={post.rating} />
                    </div>
                </Col>

                <Col xs={24}>
                    <p>
                        {post.description}
                    </p>
                </Col>
                {
                    isArray(post.images) && !isEmpty(post.images) ?
                        <Row gutter={[10, 10]}>
                            {
                                post.images.map((img) => {
                                    return <img key={uuidv4()} src={img} alt={post.title} />
                                })
                            }
                        </Row> : null
                }
            </Row>
        </MainLayoutComponent>
    )
}

export default PostComponent
