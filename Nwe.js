import axios from "axios";
import Post from "../models/post";
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { contractAddress } from "../constants/Constants";
import { useState, useEffect } from 'react';
export default function getAllposts() {
    const [posts, setPosts] = useState();
    const abi = ["function writepost(string memory prefName, string memory prefDesc) public"];
    useEffect(() => {
    get();
    }, [])
    async function get() {}
    async function writepost(name, description) {}
    return {posts : posts, writepost : (name, description) => writepost(name, description)};
}
