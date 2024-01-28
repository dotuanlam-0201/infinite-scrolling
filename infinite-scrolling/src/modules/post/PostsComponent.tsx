import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Card, Col, Empty, Rate, Row, Skeleton } from "antd";
import { isEmpty } from "lodash";
import { useState } from "react";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getPosts } from "../../utils/post/getPosts";
import MainLayoutComponent from "../layout/MainLayoutComponent";
import SearchPostComponent from "./SearchPostComponent";
import { Posts, TypePost } from "./model";

const PostsComponent = () => {
    const [query, setQuery] = useState<string>("");
    const [limit, setLimit] = useState(20);

    const queryPosts = useQuery({
        queryKey: [`posts`, query, limit],
        queryFn: () => getPosts({ query: query, limit: limit }),
        initialData: new Posts(),
        placeholderData: keepPreviousData,
    });

    const posts: Posts = queryPosts.data;

    return (
        <MainLayoutComponent>
            <BottomScrollListener
                debounce={1000 * 60}
                triggerOnNoScroll={false}
                onBottom={() => {
                    if (
                        !queryPosts.isFetching &&
                        !queryPosts.isRefetching &&
                        limit < posts.total
                    ) {
                        setLimit(limit + 20);
                    }
                }}
            >
                <Row className="posts" gutter={[20, 20]}>
                    <Col xs={24}>
                        <SearchPostComponent
                            query={query}
                            onChange={(e) => {
                                setQuery(e);
                            }}
                        />
                    </Col>

                    {queryPosts.isFetching && (
                        <>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </>
                    )}

                    {isEmpty(posts.products) && <Empty />}

                    {!queryPosts.isFetching &&
                        posts.products.map((post: TypePost) => {
                            return (
                                <Col key={uuidv4()} xs={24} sm={12} md={12} lg={8} xl={6}>
                                    <Link
                                        to={{
                                            pathname: "/post/" + post.id,
                                        }}
                                    >
                                        <Card
                                            className="post-card"
                                            bordered
                                            hoverable
                                            cover={<img alt={post.title} src={post.thumbnail} />}
                                        >
                                            <span>{post.title}</span>
                                            <br />
                                            <b>
                                                {post.price} USD{" "}
                                                <small style={{ color: "gray" }}>
                                                    (- {post.discountPercentage}) %
                                                </small>
                                            </b>
                                            <Row justify={"space-between"} align={"middle"}>
                                                <Rate defaultValue={post.rating} disabled />
                                                <small>({post.rating})</small>
                                            </Row>
                                            <div>
                                                <small>{post.description}</small>
                                            </div>
                                        </Card>
                                    </Link>
                                </Col>
                            );
                        })}
                </Row>
            </BottomScrollListener>
        </MainLayoutComponent>
    );
};

export default PostsComponent;
