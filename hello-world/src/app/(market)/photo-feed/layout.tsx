import React from "react";

export default function PhotoFeedLayout(props: {
    modal: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="modal">{props.modal}</div>
            <div className="content">{props.children}</div>
        </>
    );
}