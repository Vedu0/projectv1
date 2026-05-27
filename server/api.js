const express = require("express");
const app = express();

app.get("/api/inventory", (req, res) => {

    const inventory = [

            {
                        id:1,
                                    container:"Container 1",
                                                quantity:10,
                                                            capacity:15,
                                                                        status:"FULL"
                                                                                },

                                                                                        {
                                                                                                    id:2,
                                                                                                                container:"Container 2",
                                                                                                                            quantity:5,
                                                                                                                                        capacity:15,
                                                                                                                                                    status:"LOW STOCK"
                                                                                                                                                            },

                                                                                                                                                                    {
                                                                                                                                                                                id:3,
                                                                                                                                                                                            container:"Container 3",
                                                                                                                                                                                                        quantity:0,
                                                                                                                                                                                                                    capacity:15,
                                                                                                                                                                                                                                status:"EMPTY"
                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                            ];

                                                                                                                                                                                                                                                res.json(inventory);

                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                module.exports = app;