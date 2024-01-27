import { LeftOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Row } from "antd";
import { isEmpty } from "lodash";
import { ReactNode } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

interface IProps {
    children: ReactNode;
}

const MainLayoutComponent = (props: IProps) => {
    return (
        <Layout>
            <div id="header">
                <Header />
            </div>
            <div id="content">
                {props.children}
                <div id="footer">
                    <span>Developed by Do Tuan Lam</span>
                    <span>Front End Developer</span>
                    <span>dotuanlam212k@gmail.com</span>
                </div>
            </div>
        </Layout>
    );
};

export default MainLayoutComponent;

const Header = () => {
    const params = useParams();
    const navigate = useNavigate();
    return <Row justify={'space-between'} align={'middle'}>
        <span>
            {!isEmpty(params) && (
                <Link to={{ pathname: "/" }}>
                    <Button type="link" icon={<LeftOutlined />} />
                </Link>
            )}
            Scrolling Infinite App
        </span>
        <span id="header-button-logout" onClick={() => {
            navigate({ pathname: "/login" });
            sessionStorage.setItem("TOKEN", "");
        }}>
            Logout  <LogoutOutlined />
        </span>
    </Row>
}
