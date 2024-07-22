import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import React from 'react';
import ScrollableFeed from "react-scrollable-feed";
import { format, isSameDay, parseISO } from 'date-fns';
import {
    isLastMessage,
    isSameSender,
    isSameSenderMargin,
    isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
    const { user } = ChatState();

    const formatDate = (date) => {
        return format(date, 'MM/dd/yy');
    };

    // Helper function to format the time
    const formatTime = (date) => {
        return format(date, 'p');
    };

    return (
        <ScrollableFeed>
            {messages && messages.map((m, i) => {
                const showDateDivider = i === 0 || !isSameDay(parseISO(messages[i - 1].createdAt), parseISO(m.createdAt));

                return (
                    <React.Fragment key={m._id}>
                        {showDateDivider && (
                            <div style={{ textAlign: "center", margin: "10px 0", color: "gray" }}>
                                {formatDate(parseISO(m.createdAt))}
                            </div>
                        )}
                        <div style={{ display: "flex" }} key={m._id} position="relative">
                            {(isSameSender(messages, m, i, user._id) ||
                                isLastMessage(messages, i, user._id)) && (
                                    <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                                        <Avatar
                                            mt="7px"
                                            mr={1}
                                            size="sm"
                                            cursor="pointer"
                                            name={m.sender.name}
                                            src={m.sender.pic}
                                        />
                                    </Tooltip>
                                )}
                            <span
                                style={{
                                    backgroundColor: `${m.sender._id === user._id ? "#BEE3F8" : "#EA7057"}`,
                                    marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                    marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                    borderRadius: "20px",
                                    padding: "5px 15px",
                                    maxWidth: "75%",
                                }}
                            >
                                {m.content}
                                <span> &nbsp; &nbsp;&nbsp;&nbsp;</span>

                                <span
                                    style={{
                                        color: `${m.sender._id === user._id ? "grey" : "teal"}`,
                                        fontSize: "0.75em",
                                        textAlign: m.sender._id === user._id ? "right" : "left",
                                        marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                        marginTop: 2,
                                    }}
                                >
                                    {format(new Date(m.createdAt), 'p')}
                                </span>
                            </span>
                        </div>
                    </React.Fragment>
                );
            })}
            {/* {messages &&
                messages.map((m, i) => (
                    <div style={{ display: "flex" }} key={m._id} position="relative">
                        {(isSameSender(messages, m, i, user._id) ||
                            isLastMessage(messages, i, user._id)) && (
                                <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                                    <Avatar
                                        mt="7px"
                                        mr={1}
                                        size="sm"
                                        cursor="pointer"
                                        name={m.sender.name}
                                        src={m.sender.pic}
                                    />
                                </Tooltip>
                            )}
                        <span
                            style={{
                                backgroundColor: `${m.sender._id === user._id ? "#BEE3F8" : "#EA7057"}`,
                                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                borderRadius: "20px",
                                padding: "5px 15px",
                                maxWidth: "75%",
                            }}
                        >
                            {m.content}
                            <span> &nbsp; &nbsp;&nbsp;&nbsp;</span>

                            <span
                                style={{
                                    color: `${m.sender._id === user._id ? "grey" : "teal"}`,
                                    fontSize: "0.75em",
                                    textAlign: m.sender._id === user._id ? "right" : "left",
                                    marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                    marginTop: 2,
                                }}
                            >
                                {format(new Date(m.createdAt), 'p')}
                            </span>
                        </span>

                    </div>
                ))
            } */}
        </ScrollableFeed >
    );
};


export default ScrollableChat;
