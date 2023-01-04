export const Endpoint = "https://klaytn-baobab.blockpi.network/v1/rpc/06b0aa71d4df5d9a7c2993e404288b8556ae9d49";
export const contractAddress = "0xfa06340402776a00AE93ba1E17A202C12D5410Aa";


export default class Post {
name;
description;
likes;
comments;
fromAddress;
    constructor(data) {
        this.name = data[0];
        this.description = data[1];
        this.likes = data[2];
        this.comments = data[3];
        this.fromAddress = data[4];
    }
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  import { contractAddress, Endpoint } from "./Constants";
import { ethers } from "ethers";
export default async function handler(req, res) {
    const provider = new (ethers.providers.getDefaultProvider) (Endpoint);
    let abi = [
    "function getAllposts() public view returns(post[] memory)",
    ];
    const smartContract = new ethers.Contract(contractAddress, abi, provider);
    const result = await smartContract.getPosts();
    const posts = result[0].map((post, index) => {
    return [...post, result[1][index]]
     });
    res.status(200).json(posts);
}
