import { SearchOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { debounce } from "lodash";
import React, { ChangeEvent } from "react";

interface IProps {
    onChange: (e: string) => void;
    query: string;
}

const SearchPostComponent = (props: IProps) => {

    const onChange = (e: string) => {
        props.onChange(e);
    };

    const debounceOnChange = React.useCallback(debounce(onChange, 1000), []);

    return (
        <Form layout={"vertical"} name="form-search-post" colon={false}>
            <Form.Item>
                <Input
                    style={{ maxWidth: 500 }}
                    prefix={<SearchOutlined />}
                    allowClear
                    autoFocus
                    defaultValue={props.query}
                    onChange={(e: ChangeEvent<any>) => {
                        debounceOnChange(e.target.value);
                    }}
                    placeholder="Typing to search..."
                />
            </Form.Item>
        </Form>
    );
};

export default SearchPostComponent;
