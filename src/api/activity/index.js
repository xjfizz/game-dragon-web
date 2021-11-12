import { request } from '@/utils/axios'


// 预售活动
let activity = {
    // 获取-获取推荐人排行榜-列表
    invitUserRankList: (data) => {
        // return request({
        //     // url: '/passport/user/recommend',
        //     url: '/api/market/presale/user/recommend',
        //     method: 'post',
        //     data,
        //     noToken: true,
        // })

        let res = {
            res1: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 33112,
                            openId: '0x51aea397f517b5269ca0686eb8df5b1c80c98464',
                            recommendUid: 1021489,
                            index: 1
                        },
                        {
                            cnt: 24094,
                            openId: '0x9b8fa6469ad0a1e8dcaeeee2974c2bc23ab7c006',
                            recommendUid: 1232867,
                            index: 2
                        },
                        {
                            cnt: 20871,
                            openId: '0x666F496b9Ae6603b51c8F114d284A1F2C529971D',
                            recommendUid: 1068504,
                            index: 3
                        },
                        {
                            cnt: 16429,
                            openId: '0x2f3f2dd798cac76216ff597110338c69839a4107',
                            recommendUid: 1180844,
                            index: 4
                        },
                        {
                            cnt: 16014,
                            openId: '0x70973cBC4bA8e1c3220D57238479F4704629b63D',
                            recommendUid: 1022224,
                            index: 5
                        },
                        {
                            cnt: 14887,
                            openId: '0x9bd120dc47806bbe91327a9a505d3edc8df8bc9c',
                            recommendUid: 1074270,
                            index: 6
                        },
                        {
                            cnt: 13276,
                            openId: '0x73bae269621c9621761275af589df56e6e876d34',
                            recommendUid: 1138963,
                            index: 7
                        },
                        {
                            cnt: 12306,
                            openId: '0x8A5fD214d210Bf5320B7b20cEdE282CbE15CEE63',
                            recommendUid: 1086209,
                            index: 8
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 1,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res2: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 11560,
                            openId: '0xb2d14Cdb5a3af6d62111E1173BD48f7e26b6d3aE',
                            recommendUid: 1088934,
                            index: 9
                        },
                        {
                            cnt: 11510,
                            openId: '0xf0a1f9e67d5ec226ce9506bc7a20806be20d0eb7',
                            recommendUid: 1185949,
                            index: 10
                        },
                        {
                            cnt: 11443,
                            openId: '0x7Cf50E0205b8c83582a617c5DF8E53758C980906',
                            recommendUid: 1088944,
                            index: 11
                        },
                        {
                            cnt: 11297,
                            openId: '0x612Dd32f0D505b124BfB41f880cab6C3919D486f',
                            recommendUid: 1088942,
                            index: 12
                        },
                        {
                            cnt: 10529,
                            openId: '0x82941f8edE5997505bfdA22Efa71411A0AA0B9ED',
                            recommendUid: 1088941,
                            index: 13
                        },
                        {
                            cnt: 9137,
                            openId: '0x9e8950a93bb44a28b5ad98336080a60ff9a58e98',
                            recommendUid: 1003962,
                            index: 14
                        },
                        {
                            cnt: 9123,
                            openId: '0x64c88db764121b50ab9b0ca50a625236e46af604',
                            recommendUid: 1156134,
                            index: 15
                        },
                        {
                            cnt: 8750,
                            openId: '0x65cA87d541b2326c01Ab54B4a978Daf94bF683b4',
                            recommendUid: 1156136,
                            index: 16
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 2,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res3: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 8100,
                            openId: '0x6fa0a14dcb154efb5420fc2fe5b30c6b09b8ad75',
                            recommendUid: 1156165,
                            index: 17
                        },
                        {
                            cnt: 7283,
                            openId: '0x706564690bF81B6932A149AE018E6269Ff228F16',
                            recommendUid: 1156139,
                            index: 18
                        },
                        {
                            cnt: 6869,
                            openId: '0x02b02a1bd3c31eb5a9aa106ce79b1646c1339b83',
                            recommendUid: 1156148,
                            index: 19
                        },
                        {
                            cnt: 6856,
                            openId: '0xf7eac5dac49b98d0a256081ec91b9abac1154866',
                            recommendUid: 1156154,
                            index: 20
                        },
                        {
                            cnt: 6194,
                            openId: '0x82115e6d2d90577493022b41a378bfd8f8cf0959',
                            recommendUid: 1156155,
                            index: 21
                        },
                        {
                            cnt: 6193,
                            openId: '0xda56b76a721ec3ce8d4fcb556f45b38349cf6633',
                            recommendUid: 1156157,
                            index: 22
                        },
                        {
                            cnt: 6182,
                            openId: '0xcc436f7ca82f8eab345b5883d6b950594a5b7e94',
                            recommendUid: 1156169,
                            index: 23
                        },
                        {
                            cnt: 6167,
                            openId: '0xff202746e7941c6c07f8cfeec6cc52ec093baf73',
                            recommendUid: 1156161,
                            index: 24
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 3,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res4: {
                "code": 0,
                "data": {
                    "list": [

                        {
                            cnt: 5811,
                            openId: '0x4beda7d57fff263b6d410286ccefe31fbe75c1bd',
                            recommendUid: 1078194,
                            index: 25
                        },
                        {
                            cnt: 5193,
                            openId: '0x68f6b45f783f5289159d168fc0c25b38a161eaea',
                            recommendUid: 1001196,
                            index: 26
                        },
                        {
                            cnt: 4984,
                            openId: '0x561ba2467bfec863d2092f96affd72eed42e0c47',
                            recommendUid: 1540035,
                            index: 27
                        },
                        {
                            cnt: 4979,
                            openId: '0x488f02b4223331018cc0dc1c00ad40aefbb7c414',
                            recommendUid: 1540016,
                            index: 28
                        },
                        {
                            cnt: 4468,
                            openId: '0xa95420eb17a50e99fa339e8a2ecd18b9a391b53e',
                            recommendUid: 1219142,
                            index: 29
                        },
                        {
                            cnt: 4454,
                            openId: '0xE81eF7C147A9Fea6fA1e3148DaFd8EcB366e0029',
                            recommendUid: 1302722,
                            index: 30
                        },
                        {
                            cnt: 4296,
                            openId: '0x458e9214fa41b6398426785b30e5e9e53652f45b',
                            recommendUid: 1035536,
                            index: 31
                        },
                        {
                            cnt: 4266,
                            openId: '0x9a96dF5C9f5964068f763298033B93B6232E129e',
                            recommendUid: 1321850,
                            index: 32
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 4,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res5: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 4262,
                            openId: '0xadfa7422594a76badd1ae072641b63ab306ea3b4',
                            recommendUid: 1144405,
                            index: 33
                        },
                        {
                            cnt: 4240,
                            openId: '0x70dbd0ab67bb4f7361ea3fbedc37e53072678a4c',
                            recommendUid: 1223163,
                            index: 34
                        },
                        {
                            cnt: 4209,
                            openId: '0x76c1ed6c51b70744d8093ad7c2c2dab3984fef42',
                            recommendUid: 1146925,
                            index: 35
                        },
                        {
                            cnt: 4192,
                            openId: '0x2b6a3f170356ae8ccf8968de7cbe9b43970130a0',
                            recommendUid: 1218217,
                            index: 36
                        },
                        {
                            cnt: 4173,
                            openId: '0x3829a3d9421ccdba7fda810e0edb6dffff3f8ede',
                            recommendUid: 1183892,
                            index: 37
                        },
                        {
                            cnt: 4163,
                            openId: '0xfA92f035A642835e3B93707FF00CD44e44A524Ff',
                            recommendUid: 1130450,
                            index: 38
                        },
                        {
                            cnt: 4152,
                            openId: '0xfee0a9c20b490536503e24b46d8db79c37450c95',
                            recommendUid: 1218594,
                            index: 39
                        },
                        {
                            cnt: 4126,
                            openId: '0x82ec08a445136f2115c9c76761f5a0dc2463346b',
                            recommendUid: 1146221,
                            index: 40
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 5,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res6: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 4114,
                            openId: '0x36333290d611154082aeba93633e8d6b2c2fec5a',
                            recommendUid: 1146733,
                            index: 41
                        },
                        {
                            cnt: 4098,
                            openId: '0xb2c389b078d8777f70f7d1d40ab9eab2966f72b0',
                            recommendUid: 1144094,
                            index: 42
                        },
                        {
                            cnt: 4097,
                            openId: '0x2144df36bf2add63163bbe06699fd2fa852991b5',
                            recommendUid: 1218432,
                            index: 43
                        },
                        {
                            cnt: 4095,
                            openId: '0x1933f604f8b96710d3a919821434a009dfca1311',
                            recommendUid: 1223403,
                            index: 44
                        },
                        {
                            cnt: 4088,
                            openId: '0x65026d25195a2481be8d23ec1c0b562f74229fff',
                            recommendUid: 1147725,
                            index: 45
                        },
                        {
                            cnt: 4072,
                            openId: '0xd66b3c96f9225a50aea528d3769d14e68541b099',
                            recommendUid: 1004250,
                            index: 46
                        },
                        {
                            cnt: 4065,
                            openId: '0xf715d16a55d6309e3b6e4781a327165eb5c34c12',
                            recommendUid: 1305568,
                            index: 47
                        },
                        {
                            cnt: 4058,
                            openId: '0xcbc82102bc957cc524bf83c433cff3bca678b7b2',
                            recommendUid: 1002814,
                            index: 48
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 6,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res7: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 4048,
                            openId: '0xd30d110c4c833760eda3604aa412e050300e8094',
                            recommendUid: 1002834,
                            index: 49
                        },
                        {
                            cnt: 4045,
                            openId: '0x6c8f440797a1f5e3244910d6ebe6f415b1e38750',
                            recommendUid: 1002862,
                            index: 50
                        },
                        {
                            cnt: 4039,
                            openId: '0x360aeaf54be1db0f538ff1e0b78113f57e8b3b49',
                            recommendUid: 1002838,
                            index: 51
                        },
                        {
                            cnt: 4039,
                            openId: '0x00ba431bb939c8f17feba960e5469db57823dbdf',
                            recommendUid: 1221738,
                            index: 52
                        },
                        {
                            cnt: 4027,
                            openId: '0x49894064c1f4101a79595dfc42373cff559545f6',
                            recommendUid: 1147201,
                            index: 53
                        },
                        {
                            cnt: 3996,
                            openId: '0x08fde1db5a774e924ac025cd3e5dd00351a47b7c',
                            recommendUid: 1146461,
                            index: 54
                        },
                        {
                            cnt: 3992,
                            openId: '0x80712d6a5e7ae7659e8a8d057519719685fce703',
                            recommendUid: 1219803,
                            index: 55
                        },
                        {
                            cnt: 3982,
                            openId: '0xae2a5c102beaf384b25bca88556d80adefe9323a',
                            recommendUid: 1222018,
                            index: 56
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 7,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res8: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 3934,
                            openId: '0x59dcd4ca42c5f7bfb377759c6ffa56553d790864',
                            recommendUid: 1106865,
                            index: 57
                        },
                        {
                            cnt: 3916,
                            openId: '0x27aa62a8c987e712931a6fb59d87626fdf42db4b',
                            recommendUid: 1222957,
                            index: 58
                        },
                        {
                            cnt: 3805,
                            openId: '0x367591aed5242f19015b5727433c7f3b20ef9f05',
                            recommendUid: 1224078,
                            index: 59
                        },
                        {
                            cnt: 3800,
                            openId: '0x961be372d756df4d644151c3e7a27d841f7dac66',
                            recommendUid: 1147015,
                            index: 60
                        },
                        {
                            cnt: 3779,
                            openId: '0xdd4ba63e72116b3d76446fe70b055a813e5f5005',
                            recommendUid: 1219278,
                            index: 61
                        },
                        {
                            cnt: 3764,
                            openId: '0xc05dacaf81a56faa992e4d341c9a752da6261f8c',
                            recommendUid: 1220187,
                            index: 62
                        },
                        {
                            cnt: 3747,
                            openId: '0xada7e4ed76be89495cf45c5d9f4318e958845fd1',
                            recommendUid: 1146780,
                            index: 63
                        },
                        {
                            cnt: 3746,
                            openId: '0xa25f5daf0d46a262204ffb1a38c67d174802889a',
                            recommendUid: 1219372,
                            index: 64
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 8,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },


            res9: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 3745,
                            openId: '0xc483eee6aad57d7f8851b5da4da763a547980120',
                            recommendUid: 1221508,
                            index: 65
                        },
                        {
                            cnt: 3737,
                            openId: '0xfe80a39a905a9c7d9a1eb91c14429d53b03f7598',
                            recommendUid: 1222293,
                            index: 66
                        },
                        {
                            cnt: 3734,
                            openId: '0x054d879d5e533d9A4b4689449848Bf82ed151ce0',
                            recommendUid: 1002444,
                            index: 67
                        },
                        {
                            cnt: 3731,
                            openId: '0x696f0a6b650c1d56f19b4adc64080d03808c7f7e',
                            recommendUid: 1146657,
                            index: 68
                        },
                        {
                            cnt: 3731,
                            openId: '0xb6ade5f0f31005d783207c04b86a397715f6f4be',
                            recommendUid: 1221120,
                            index: 69
                        },
                        {
                            cnt: 3726,
                            openId: '0xc8b556036809e442b22eac893e16a22fe3e2d54f',
                            recommendUid: 1219698,
                            index: 70
                        },
                        {
                            cnt: 3718,
                            openId: '0xd5d3e94ab8d0ea8fd58b1da8b27b00219d9a616c',
                            recommendUid: 1220473,
                            index: 71
                        },
                        {
                            cnt: 3712,
                            openId: '0x13690f9e1cc4b46cd81f4ca31bafb6f76e0fbf20',
                            recommendUid: 1223672,
                            index: 72
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 9,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res10: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 3710,
                            openId: '0x6dEE5833a5Dd229A878ccB80693B5c3FC911F2a6',
                            recommendUid: 1003568,
                            index: 73
                        },
                        {
                            cnt: 3710,
                            openId: '0xab9be71c73a9052a42c3840cdf24cc1c97b1e541',
                            recommendUid: 1144486,
                            index: 74
                        },
                        {
                            cnt: 3709,
                            openId: '0x20137f45ee9a243007969f7de98a53d18f3a263e',
                            recommendUid: 1219909,
                            index: 75
                        },
                        {
                            cnt: 3706,
                            openId: '0xa90a74e56cd67f8ccd9e0386148a99ff77e6a10e',
                            recommendUid: 1134792,
                            index: 76
                        },
                        {
                            cnt: 3703,
                            openId: '0xce68515ce217996041730b9b82273d61bd92f8aa',
                            recommendUid: 1218997,
                            index: 77
                        },
                        {
                            cnt: 3697,
                            openId: '0x9eb9260dcec0d8c31f498f92f20ad4e1a301131d',
                            recommendUid: 1218727,
                            index: 78
                        },
                        {
                            cnt: 3693,
                            openId: '0xf8bd733c028d5dd832e85071bac66a8d0a0f8b14',
                            recommendUid: 1146610,
                            index: 79
                        },
                        {
                            cnt: 3686,
                            openId: '0xa1b34bd356a8b0b9c4a844d9545c6303bb618b29',
                            recommendUid: 1146372,
                            index: 80
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 10,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res11: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 3646,
                            openId: '0x9d555540b8b16f77b500facae6a520679c1f5116',
                            recommendUid: 1004089,
                            index: 81
                        },
                        {
                            cnt: 3639,
                            openId: '0xf5fb5abfa3caceb02bc96b3d84770b112addbdf9',
                            recommendUid: 1607161,
                            index: 82
                        },
                        {
                            cnt: 3638,
                            openId: '0xafe3017ff20e009e2373a88bcd1bd92530463a0d',
                            recommendUid: 1540071,
                            index: 83
                        },
                        {
                            cnt: 3632,
                            openId: '0x62db0fd96DE89B3bFF88506e1d07b67E97Db3d4c',
                            recommendUid: 1556799,
                            index: 84
                        },
                        {
                            cnt: 3629,
                            openId: '0x0da306fc820588648e537a945223e8e2f70d4dd0',
                            recommendUid: 1219569,
                            index: 85
                        },
                        {
                            cnt: 3608,
                            openId: '0x4462a2f2f76f78ca5d689c267b55f1b9066eb2fb',
                            recommendUid: 1003803,
                            index: 86
                        },
                        {
                            cnt: 3593,
                            openId: '0x11aea77f0d2440c5930e6a99105b3e434bd62806',
                            recommendUid: 1004090,
                            index: 87
                        },
                        {
                            cnt: 3590,
                            openId: '0xc70cb0a260694c0e1a1e10f83e6354bc4bffa635',
                            recommendUid: 1540152,
                            index: 88
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 11,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res12: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 3578,
                            openId: '0x564ae57af1ce25d16638fb45fc98103834a0d8d7',
                            recommendUid: 1146523,
                            index: 89
                        },
                        {
                            cnt: 3575,
                            openId: '0x41826e523462a73cc5f116e5d1f19f81f82c73ef',
                            recommendUid: 1003812,
                            index: 90
                        },
                        {
                            cnt: 3565,
                            openId: '0x295ca61436b580bbba8f9e48928396e867620ba6',
                            recommendUid: 1540144,
                            index: 91
                        },
                        {
                            cnt: 3564,
                            openId: '0x623c4df21b1ee72c0e8dff3a58f401531209b4be',
                            recommendUid: 1003927,
                            index: 92
                        },
                        {
                            cnt: 3554,
                            openId: '0x244f0c6bf9275759829d131cf18fc4282b75a0c4',
                            recommendUid: 1003908,
                            index: 93
                        },
                        {
                            cnt: 3542,
                            openId: '0x0288926f57419310dd48e28874b37fa1abde93cb',
                            recommendUid: 1004101,
                            index: 94
                        },
                        {
                            cnt: 3524,
                            openId: '0x36B150fe65E1a530D177e91b407034236147859e',
                            recommendUid: 1092398,
                            index: 95
                        },
                        {
                            cnt: 3524,
                            openId: '0x6bb91d747c527ce01783b1ea95b46be5f3bd9721',
                            recommendUid: 1540173,
                            index: 96
                        },
                    ],
                    "pageInfo": {
                        "currentPage": 12,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },

            res13: {
                "code": 0,
                "data": {
                    "list": [
                        {
                            cnt: 3510,
                            openId: '0xdc81ad149a452d052e8bcf31425b405dd491c66b',
                            recommendUid: 1540128,
                            index: 97
                        },
                        {
                            cnt: 3507,
                            openId: '0x07e03fb18c0d692dd2a178e883cf153bf3d519d9',
                            recommendUid: 1540051,
                            index: 98
                        },
                        {
                            cnt: 3492,
                            openId: '0xAc7aA2e7757384716601016121eA58942272b6c0',
                            recommendUid: 1014993,
                            index: 99
                        },
                        {
                            cnt: 3470,
                            openId: '0x978ae8d40b5df7a6d9457ccc2cffe1de4c44982b',
                            recommendUid: 1304929,
                            index: 100
                        }
                    ],
                    "pageInfo": {
                        "currentPage": 13,
                        "pageSize": 8,
                        "total": 100,
                        "totalPages": 0
                    }
                },
                "i18n": "ok",
                "msg": "OK"
            },



        }


        let response = res['res' + data.currentPage]

        return new Promise((resolve, reject) => {
            resolve(response)
        })

    },

    // 获取-获取推荐人链接龙蛋购买排行榜-列表
    invitEggbuyRankList: (data) => {
        return request({
            url: '/api/market/presale/stRecommend',
            //url:'/api/market/presale/user/recommend',
            method: 'post',
            data,
        })
    },

    // 获取-获取活动开启时间
    getActivityStartTime: (data) => {
        return request({
            url: '/api/market/presale/activity',
            method: 'post',
            data,
        })
    },

    // 获取服务器时间
    getServericeTime: (data) => {
        return request({
            url: '/api/config/getSysTimestamp',
            method: 'post',
            data,
            noToken: true,
            noLoading: true
        })
    },


    // 获取-活动邀请链接
    getRecommendUrl: (data) => {
        return request({
            url: '/auth/getRecommendUrl',
            method: 'post',
            data,
        })
    },


    // 绑定邮箱
    bindEmail: (data) => {
        return request({
            url: '/api/email/bind',
            method: 'post',
            data
        })
    },



    // 获取龙蛋预售列表
    getPreEggList: (data) => {
        return request({
            url: '/api/market/presale/page',
            method: 'post',
            data
        })
    },

    // 购买龙蛋
    buyEgg: (data) => {
        return request({
            url: '/auth/market/presale/buy',
            method: 'post',
            data
        })
    },

    // 购买龙蛋-取消
    buyEggCancel: (data) => {
        return request({
            url: '/auth/market/presale/cancel',
            method: 'post',
            data
        })
    },

    // 购买龙蛋-支付中
    buyEggPay: (data) => {
        return request({
            url: '/auth/market/presale/payment',
            method: 'post',
            data
        })
    },

    // 获取活动tips 详情
    activityDetail: (data) => {
        return request({
            url: '/api/market/presale/getActivityDetail',
            method: 'post',
            data,
            noToken: true,
        })
    },

    // 获取活动我的邀请人数
    getMyRecommend: (data) => {
        return request({
            url: '/auth/getMyRecommend',
            method: 'post',
            data
        })
    },
    // 上传文件
    uploadFile: (data) => {
        return request({
            url: '/api/upload/data',
            method: 'post',
            data
        })
    },
    // 活动信息提交
    activityMessage: (data) => {
        return request({
            url: '/auth/market/userRecomInfo/create',
            method: 'post',
            data
        })
    },
    // 活动信息详情
    activityMessageDetail: (data) => {
        return request({
            url: '/auth/market/userRecomInfo/detail',
            method: 'post',
            data
        })
    },
    // 获取用户信息
    getUser: (data) => {
        return request({
            url: '/auth/user/my',
            method: 'post',
            data
        })
    },


    // 获取图形验证码
    getImgCode: (data) => {
        return request({
            url: '/api/market/presale/captcha',
            method: 'post',
            data,
            noLoading: true,
            responseType: "arraybuffer"
        })
    },


}
export default activity

