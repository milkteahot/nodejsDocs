const express = require('express');
const jwt = require('jsonwebtoken');

const { verifyToken } = require('./middlewares');
const { Domain, User, Post, Hashtag } = require('../models');

const router = express.Router();

//토큰을 발급하는 라우터
router.post('/token', async(req,res) => {
    const{clientSecret} = req.body;
    try {
        const domain = await Domain.find({
            where: {clientSecret},
            include: {
                mdoel:User,
                attribute: ['nick', 'id'],
            },
        });
        if(!domain) {
            return res.status(401).json({
                code: 401,
                message: '등록되지 않은 도메인. 도메인등록하세요.',
            });
        }
        const token = jwt.sign({
            id: domain.user.id,
            nick: domain.user.nick,
        }), jwtSecret, {
            expiresIn: '1m',
            issuer: 'nodebird',
        };
        return res.json({
            code:200,
            message:' 토큰 발급됨',
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버에러',
        });
    }
});

//토큰을 테스트할 수 있는 라우터
router.get('/test', verifyToken, (req, res)=> {
    res.json(req.decoded);
});

module.exports = router;