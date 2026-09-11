export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "100%",
                            flexDirection: "column",
                            backgroundColor: "#070914"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hud"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "72px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#11142a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "game-title"
                            ]
                        ],
                        {
                            fontSize: "23px",
                            color: "#ffffff",
                            fontWeight: 700
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "score"
                            ]
                        ],
                        {
                            fontSize: "17px",
                            color: "#7ee7ff",
                            marginTop: "3px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "game"
                            ]
                        ],
                        {
                            position: "relative",
                            width: "100%",
                            height: "448px",
                            backgroundColor: "#171b3c",
                            overflow: "hidden"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "sky"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "100%",
                            height: "320px",
                            left: 0,
                            top: 0,
                            backgroundColor: "#181d42"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stars"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "100%",
                            height: "180px",
                            left: 0,
                            top: 0
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "star"
                            ]
                        ],
                        {
                            position: "absolute",
                            color: "#9eabff",
                            fontSize: "18px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s1"
                            ]
                        ],
                        {
                            left: "23px",
                            top: "35px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s2"
                            ]
                        ],
                        {
                            left: "102px",
                            top: "72px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s3"
                            ]
                        ],
                        {
                            left: "174px",
                            top: "28px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s4"
                            ]
                        ],
                        {
                            left: "146px",
                            top: "118px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ground"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: "350px",
                            width: "100%",
                            height: "98px",
                            backgroundColor: "#0a0d1d"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ground-line"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: "348px",
                            width: "100%",
                            height: "4px",
                            backgroundColor: "#52e6ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "player"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "29px",
                            width: "42px",
                            height: "42px",
                            backgroundColor: "#ffdf46",
                            borderRadius: "7px",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            borderStyle: "solid",
                            borderTopWidth: "4px",
                            borderRightWidth: "4px",
                            borderBottomWidth: "4px",
                            borderLeftWidth: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "p0"
                            ]
                        ],
                        {
                            top: "304px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "p1"
                            ]
                        ],
                        {
                            top: "249px",
                            transform: "{\"rotate\":\"18deg\"}"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "p2"
                            ]
                        ],
                        {
                            top: "215px",
                            transform: "{\"rotate\":\"35deg\"}"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "obstacle"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "42px",
                            height: "42px",
                            backgroundColor: "#ff477e",
                            transform: "{\"rotate\":\"45deg\"}",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            borderStyle: "solid",
                            borderTopWidth: "4px",
                            borderRightWidth: "4px",
                            borderBottomWidth: "4px",
                            borderLeftWidth: "4px",
                            top: "306px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o0"
                            ]
                        ],
                        {
                            left: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o1"
                            ]
                        ],
                        {
                            left: "30px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o2"
                            ]
                        ],
                        {
                            left: "52px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o3"
                            ]
                        ],
                        {
                            left: "82px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o4"
                            ]
                        ],
                        {
                            left: "108px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o5"
                            ]
                        ],
                        {
                            left: "136px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o6"
                            ]
                        ],
                        {
                            left: "164px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o7"
                            ]
                        ],
                        {
                            left: "191px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o8"
                            ]
                        ],
                        {
                            left: "220px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o9"
                            ]
                        ],
                        {
                            left: "249px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "o10"
                            ]
                        ],
                        {
                            left: "274px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "start-screen"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: "150px",
                            width: "100%",
                            height: "150px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#10132b",
                            opacity: 0.92
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "game-over"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: "150px",
                            width: "100%",
                            height: "150px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#10132b",
                            opacity: 0.92
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "big"
                            ]
                        ],
                        {
                            fontSize: "27px",
                            color: "#ffffff",
                            fontWeight: 700,
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over"
                            ]
                        ],
                        {
                            fontSize: "27px",
                            color: "#ffffff",
                            fontWeight: 700,
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "small"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            color: "#7ee7ff",
                            marginTop: "8px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "final-score"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            color: "#7ee7ff",
                            marginTop: "8px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "retry"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            color: "#ffdf46",
                            marginTop: "14px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "tap-zone"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "448px",
                            opacity: 0
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _default = exports.default = {
                        data: {
                            score: 0,
                            running: false,
                            gameOver: false,
                            obstacleFrame: 10,
                            playerFrame: 0,
                            jumpState: 0,
                            tickId: null,
                            tick: 0,
                            speed: 0
                        },
                        start () {
                            this.score = 0;
                            this.gameOver = false;
                            this.running = true;
                            this.obstacleFrame = 10;
                            this.jumpState = 0;
                            this.playerFrame = 0;
                            this.tick = 0;
                            this.speed = 0;
                            if (this.tickId) {
                                clearInterval(this.tickId);
                                this.tickId = null;
                            }
                            this.tickId = setInterval(()=>{
                                this.updateGame();
                            }, 80);
                        },
                        tap () {
                            if (!this.running) return void this.start();
                            if (0 === this.jumpState) {
                                this.jumpState = 1;
                                this.playerFrame = 1;
                            } else if (1 === this.jumpState) {
                                this.jumpState = 2;
                                this.playerFrame = 2;
                            }
                        },
                        updateGame () {
                            if (!this.running) return;
                            this.tick += 1;
                            this.obstacleFrame -= 1;
                            if (this.obstacleFrame < 0) {
                                this.obstacleFrame = 10;
                                this.score += 1;
                            }
                            if (1 === this.jumpState) {
                                this.jumpState = 2;
                                this.playerFrame = 2;
                            } else if (2 === this.jumpState) this.jumpState = 3;
                            else if (3 === this.jumpState) this.jumpState = 4;
                            else if (4 === this.jumpState) {
                                this.jumpState = 0;
                                this.playerFrame = 0;
                            }
                            if (2 === this.obstacleFrame || 1 === this.obstacleFrame) {
                                if (0 === this.jumpState) this.endGame();
                            }
                        },
                        endGame () {
                            this.running = false;
                            this.gameOver = true;
                            if (this.tickId) {
                                clearInterval(this.tickId);
                                this.tickId = null;
                            }
                        },
                        onDestroy () {
                            if (this.tickId) {
                                clearInterval(this.tickId);
                                this.tickId = null;
                            }
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "hud"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "game-title"
                                    ],
                                    value: "GEOMETRY RUN"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "score"
                                    ],
                                    value: function() {
                                        return "SCORE " + _vm_.score;
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "game"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sky"
                                    ]
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "stars"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "star",
                                            "s1"
                                        ],
                                        value: "✦"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "star",
                                            "s2"
                                        ],
                                        value: "•"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "star",
                                            "s3"
                                        ],
                                        value: "✦"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "star",
                                            "s4"
                                        ],
                                        value: "•"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "ground"
                                    ]
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "ground-line"
                                    ]
                                }
                            }, []),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 0 === _vm_.playerFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "player",
                                                "p0"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 1 === _vm_.playerFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "player",
                                                "p1"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 2 === _vm_.playerFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "player",
                                                "p2"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 0 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o0"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 1 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o1"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 2 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o2"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 3 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o3"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 4 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o4"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 5 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o5"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 6 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o6"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 7 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o7"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 8 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o8"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 9 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o9"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return 10 === _vm_.obstacleFrame;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle",
                                                "o10"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.running && !_vm_.gameOver;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "start-screen"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "big"
                                                ],
                                                value: "TAP TO START"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "small"
                                                ],
                                                value: "TAP = JUMP"
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.gameOver;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "game-over"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "over"
                                                ],
                                                value: "GAME OVER"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "final-score"
                                                ],
                                                value: function() {
                                                    return "SCORE " + _vm_.score;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "retry"
                                                ],
                                                value: "TAP TO RETRY"
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "tap-zone"
                                    ],
                                    type: "button",
                                    value: '',
                                    events: {
                                        click: function(evt) {
                                            return _vm_.tap(evt);
                                        }
                                    }
                                }
                            }, [])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
