import axios from 'axios';
//import store from '../store/index'

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
async function fetchNewsList() {
    try {
        // const response = await axios.get(`${config.baseUrl}news/1.json`);
        // return response;
        return await axios.get(`${config.baseUrl}news/1.json`);
    } catch (error) {
        console.log(error);
    }   
}
async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);
    } catch (error) {
        console.log(error);
    }       
}
async function fetchJobsList() {
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    } catch (error) {
        console.log(error);
    }         
}
async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}
async function fetchUserInfo(userName){
    try {
        return await axios.get(`${config.baseUrl}user/${userName}.json`)
        //hacker news pwas api에 user 예시 주소 가져와서 id부분 변경
    } catch (error) {
        console.log(error);
    }   
}
async function fetchItemId(itemId){
    try {
        return await axios.get(`${config.baseUrl}item/${itemId}.json`)
    } catch (error) {
        console.log(error);
    }
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemId,
}