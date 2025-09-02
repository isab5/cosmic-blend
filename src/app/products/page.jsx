"use client";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import axios from "axios";
import {
    Pagination,
    Card,
    Input,
    Button,
    Carousel,
    Skeleton,
    Spin,
} from "antd";

export default function Products() {
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    return (
        <div>
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
            />
        </div>
    );
}
