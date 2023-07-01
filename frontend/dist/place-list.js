import { sendRequest } from "../send-request.js";

let URL = 'http://localhost:8080/get/nearby_search?lat=40.985797&lng=29.025188&radius=500&type=restaurant&rating=3.5'

/*const places = {
    "html_attributions": [],
    "next_page_token": "AZose0nzlEyavfKLzH2EYdU1Fh0A5AAMbqv3PuKi_ZXIeHfS4sYQN0hYnvcp4x-40jyp6CzwCOwGNfXotU8hQbsy-gxqhcyFw7ZG-mrUMFqTvqMyDGv_SfeWznsEZt8CFUc-eA0_B_RfUYYhAfBjHPMrDHu3cVArQIdSe8-Co8hztYcj-vzMjVsmX1UWMsoIT7xlDubqAC3pr_Z78N3LfzJkn0Dnd2qqax0JQ1A8KqnpjUz_3ofEOGouwAd5I1ifA7K8yXvdJ42rf4fpKZzKQdwU2yjhoX69mggJncRYWQIatoTSkdLfu1ae7kCxmVijOZD_p5HPuIyc1AQ255wiJOk32AuEUfU7hhimrjYCogdVix1NYIeGg_291mEX8ZyfObiXJApXcUZVuBdc4PR_CC1ZiuBotbckAk-VjGZ-IB-52XDv0cn66CC8D1wgYDZM",
    "results": [
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.988978,
                    "lng": 29.024425
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9902041802915,
                        "lng": 29.02598328029149
                    },
                    "southwest": {
                        "lat": 40.9875062197085,
                        "lng": 29.02328531970849
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
            "name": "Sarnic Pub & Hotel",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1153,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115255660387099259546\">Sarnıç Meyhane &amp; Otel</a>"
                    ],
                    "photo_reference": "AZose0n7-h-KMgfUT8pIleQQDXv0a_ecVKOhNh7eP1OlHj9jfYYUbvtWmuzzb08SXMGu3QBK3D7HBHMPaEaX4-lAgpRwoXG4s0lNawnwLgH-B88OBm5fzrJm0736UBKGVXnfdqHQZHNIuDoazDCGzapd4-ZSj74IacMSBT6dWLjWSbdAQ_Sx",
                    "width": 2048
                }
            ],
            "place_id": "ChIJfxNNn2e4yhQR3SO8topPR0g",
            "plus_code": {
                "compound_code": "X2QF+HQ Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2QF+HQ"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJfxNNn2e4yhQR3SO8topPR0g",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "lodging",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 747,
            "vicinity": "Caferağa, Dumlupınar Sokak No:12"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.98623569999999,
                    "lng": 29.02184819999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9876225302915,
                        "lng": 29.02322433029149
                    },
                    "southwest": {
                        "lat": 40.9849245697085,
                        "lng": 29.0205263697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "MODA SPOR KULÜBÜ",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4000,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105562481518963691913\">Cihan Turan</a>"
                    ],
                    "photo_reference": "AZose0lbvqp7qy2jTzP9pCrh8zT66Byq-5hP9wIq-XeE2GRHA9V_4R73I2-mX2BWewyoToLxFWO69WdGuloGt_kT2Sb5qLrH7xhMXjwuMPKnckeXW7006sRVj6C-Uph2uF560yi8qbtNtW7GUHU4cfaue8wHQ6cX6crDDmjltuzmu3V14o0",
                    "width": 3000
                }
            ],
            "place_id": "ChIJbcrelWe4yhQRzk4K3tvrBMo",
            "plus_code": {
                "compound_code": "X2PC+FP Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PC+FP"
            },
            "price_level": 2,
            "rating": 3.6,
            "reference": "ChIJbcrelWe4yhQRzk4K3tvrBMo",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1070,
            "vicinity": "Caferağa, Mühürdar Caddesi Tuğlacı Emin Bey Sok No:2, Kadıköy"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9866201,
                    "lng": 29.0257578
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9879749302915,
                        "lng": 29.0270564302915
                    },
                    "southwest": {
                        "lat": 40.9852769697085,
                        "lng": 29.0243584697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Pide Sun",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2269,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111171517640056334548\">Pide Sun</a>"
                    ],
                    "photo_reference": "AZose0mHcIhzGW3xv48hl-GXefobDmRuL1YEOaHtreHsMC-dvLnE16pYS5b6UQAMC_IAY8yZAliV59gYiwlR8B7WJvUZ9hBbLzA3PQIscEOZq_eC23IJu3wFFGwpcdheYRO_hfvXO48HsdEA6KxKtO6NxrhIY5mLN7XQzuaAByfxaOsDO1Y8",
                    "width": 4032
                }
            ],
            "place_id": "ChIJg4Ih2Ga4yhQR_zsykchgzdY",
            "plus_code": {
                "compound_code": "X2PG+J8 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+J8"
            },
            "price_level": 2,
            "rating": 4.3,
            "reference": "ChIJg4Ih2Ga4yhQR_zsykchgzdY",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1520,
            "vicinity": "Caferağa, Şükran Apt, Moda Caddesi 67/B"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.986745,
                    "lng": 29.0267737
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98810398029149,
                        "lng": 29.0280907802915
                    },
                    "southwest": {
                        "lat": 40.98540601970849,
                        "lng": 29.0253928197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Kimyon Kadıköy",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 684,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111336857102973041721\">Kimyon Kadıköy</a>"
                    ],
                    "photo_reference": "AZose0nk7czyaWujo7M1YH0dz2n4OIGSYzt7TNzedNybDFzzOFzaLBJGpmb-nQWmoDWWSOAcEdiU4HhJ0cteb8Cl_7v3NUhmeMm4-I5E7H7MjpqkkFwODgQFmAo-Uol_rHjlqcVbGSGPIajuwPvAnkjYPfa_cSZ6J2jJ-Ug9B4rsoU0R_7iB",
                    "width": 1217
                }
            ],
            "place_id": "ChIJYxb0d2jQyhQRCPe8MvzIITU",
            "plus_code": {
                "compound_code": "X2PG+MP Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+MP"
            },
            "price_level": 2,
            "rating": 4.4,
            "reference": "ChIJYxb0d2jQyhQRCPe8MvzIITU",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 2417,
            "vicinity": "Caferağa, Kadife Sokak No:17 D:C"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.98727179999999,
                    "lng": 29.0276887
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98863503029149,
                        "lng": 29.0290411802915
                    },
                    "southwest": {
                        "lat": 40.98593706970849,
                        "lng": 29.0263432197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Handmade Burger Co.",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105664245848070648762\">Handmade Burger Co.</a>"
                    ],
                    "photo_reference": "AZose0mmDadqT-NQy45N-t40WrXbbsco5_6V2wrwBxYUzJmPtoC2A7-4DmRZWXUI7LlXPB6WSsnOtaPB8Qdte-lChwTEjhnFSZZT7vmBMQ6naszmgeJf__IRvY2_F02Qhk1glbMjvEYlWZosJFIU5dBl9Z8cbJobczkUyZqjnSAyDmSPFGrj",
                    "width": 4032
                }
            ],
            "place_id": "ChIJp8q5jWa4yhQRUDG0zqK-WsM",
            "plus_code": {
                "compound_code": "X2PH+W3 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PH+W3"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJp8q5jWa4yhQRUDG0zqK-WsM",
            "scope": "GOOGLE",
            "types": [
                "meal_takeaway",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 527,
            "vicinity": "Caferağa Mh, Dedem Apt, Sakız Gülü Sokak 26/A"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9862076,
                    "lng": 29.02522909999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9875769302915,
                        "lng": 29.0265916302915
                    },
                    "southwest": {
                        "lat": 40.9848789697085,
                        "lng": 29.0238936697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Tek Buffet",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103613760956240567943\">Göktuğ Özdem</a>"
                    ],
                    "photo_reference": "AZose0nJBAgMvjU2zYel43Aqi6T47oxRc92xezRdpU3pqBVMpHbQQh6qTVzDphq9xbrKzhsPrVKVeB1VU7MCFmAdadkP2KX95WP2G0Vn6Qup-B-5WRcBgfknSVUAuqWXe0VPQ07JjDi0_Fudmnqi1EAeMwzKML8NkEEvh2yegPvO4Yn25iw",
                    "width": 3024
                }
            ],
            "place_id": "ChIJBSlAjWa4yhQRGt0LKzpVk8c",
            "plus_code": {
                "compound_code": "X2PG+F3 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+F3"
            },
            "price_level": 1,
            "rating": 4.1,
            "reference": "ChIJBSlAjWa4yhQRGt0LKzpVk8c",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 232,
            "vicinity": "Caferağa Mh., Moda Cadddesi No:70 D:70"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.98503849999999,
                    "lng": 29.0246638
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98637308029151,
                        "lng": 29.0260772802915
                    },
                    "southwest": {
                        "lat": 40.98367511970851,
                        "lng": 29.0233793197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Beyaz Dürüm",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104515327731407732656\">Güfran ÜNSEL</a>"
                    ],
                    "photo_reference": "AZose0npiB6Kce0W-iw5E8BMdVQ2FibW02VM3teGTe4uH1kBYBEsPs5uuOe0cCvPDTldLsJCsOdkpeBwOCUkdArxG96L14DTDGAK7exnDf5oQDGCN0BH_AhCUYqqWzCOZ3Vj5rqda7gIdtc9Nm_n23KX9Qproj82f-_np0oUhcDOpkWmcyki",
                    "width": 4032
                }
            ],
            "place_id": "ChIJWyLk6GC4yhQRaOzg3fF6qfg",
            "plus_code": {
                "compound_code": "X2PF+2V Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PF+2V"
            },
            "price_level": 2,
            "rating": 4.6,
            "reference": "ChIJWyLk6GC4yhQRaOzg3fF6qfg",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 188,
            "vicinity": "Caferağa, 108, Moda Caddesi"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.984741,
                    "lng": 29.023717
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98608063029149,
                        "lng": 29.0250884802915
                    },
                    "southwest": {
                        "lat": 40.98338266970849,
                        "lng": 29.0223905197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
            "name": "DileZ Gıda ve Dış Ticaret K-Olive Naturel Sızma Zeytinyağı",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJ7WCpRvfHyhQRz9n9i0aG_bo",
            "plus_code": {
                "compound_code": "X2MF+VF Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2MF+VF"
            },
            "reference": "ChIJ7WCpRvfHyhQRz9n9i0aG_bo",
            "scope": "GOOGLE",
            "types": [
                "shopping_mall",
                "furniture_store",
                "home_goods_store",
                "restaurant",
                "point_of_interest",
                "food",
                "health",
                "store",
                "establishment"
            ],
            "vicinity": "Caferağa Mahallesi Moda Caddesi Fırıldak Sokak 27/a"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9875491,
                    "lng": 29.02693509999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98886288029149,
                        "lng": 29.02826773029149
                    },
                    "southwest": {
                        "lat": 40.98616491970849,
                        "lng": 29.02556976970849
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Pilav Dunyasi",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 425,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113062050809583547747\">Pilav Dünyası</a>"
                    ],
                    "photo_reference": "AZose0kaaXgYAdu6lUKTF8vAV_gSCAl1MCB5ZSSC2XOn5Az1dUW46H5unmsUpeuX8YpkxbYk89N0V2ACWQR3M6j6lGfk5aUbIqNMwaIVZM2camRM-P92m66eBxChQLTN_S5sseqdx6aVO29MEE2rcX2aZ9GKvvAnwY0lub0Sa_4GekmE9_lS",
                    "width": 750
                }
            ],
            "place_id": "ChIJgzV_zHjHyhQR7x2ypfeQPyA",
            "plus_code": {
                "compound_code": "X2QG+2Q Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2QG+2Q"
            },
            "rating": 3,
            "reference": "ChIJgzV_zHjHyhQR7x2ypfeQPyA",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 125,
            "vicinity": "Caferağa, Sakız Gülü Sokak 21/2"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9867094,
                    "lng": 29.0274584
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98807393029149,
                        "lng": 29.0287549802915
                    },
                    "southwest": {
                        "lat": 40.98537596970849,
                        "lng": 29.02605701970851
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Cafe&Shop",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2709,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103888223803175071938\">Cafe&amp;Shop</a>"
                    ],
                    "photo_reference": "AZose0luHvw-DtY20h9GJNMhuB51T8Y0kD4CmNFo9kjfTsFGr9PwCLh7HO5E5qlwT1b6jNH3aHYfyl-F4zr_38rQu1xyTK9qNsArumQ372YtcWnloYS9o-_7rtL-C_uks5twAMefbm8cfMhdrRqwc3Weq0XN5gYee1AYGivD8pEquyFkREYJ",
                    "width": 3968
                }
            ],
            "place_id": "ChIJK6j_lWa4yhQRgAnlpi4aFh8",
            "plus_code": {
                "compound_code": "X2PG+MX Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+MX"
            },
            "price_level": 2,
            "rating": 4.5,
            "reference": "ChIJK6j_lWa4yhQRgAnlpi4aFh8",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "cafe",
                "bar",
                "point_of_interest",
                "food",
                "store",
                "establishment"
            ],
            "user_ratings_total": 694,
            "vicinity": "Caferağa, Caferağa Mh Bahariye Cad, Hacı Şükrü Sokak No:11"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.98870650000001,
                    "lng": 29.0273759
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9901147802915,
                        "lng": 29.0287586302915
                    },
                    "southwest": {
                        "lat": 40.9874168197085,
                        "lng": 29.0260606697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Pilav Station",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3472,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106225601277264911955\">Mouhannad</a>"
                    ],
                    "photo_reference": "AZose0mzgxzXnA6wZPnauT1YKg1_TAAAKqMDpUBzhf8HYhfbEIIvTf_CwMpDhdmRB-EVD0Ebu1-mqQCRvw5F8vgtig8Pia2Xt2fuYya0DzmjQ8EHpSYr0bsVoptS-njmNG1bbUbm6fOaQSoxLFhyQOi8IgqKkTW-AnS2WR4rESbWLHWYMvvX",
                    "width": 4624
                }
            ],
            "place_id": "ChIJlxyNFGa4yhQRTf7RdM8m77A",
            "plus_code": {
                "compound_code": "X2QG+FX Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2QG+FX"
            },
            "price_level": 1,
            "rating": 4.1,
            "reference": "ChIJlxyNFGa4yhQRTf7RdM8m77A",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 720,
            "vicinity": "Caferağa, Piri Çavuş Sokak No:37 D:B"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9854827,
                    "lng": 29.0255633
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98685718029149,
                        "lng": 29.02693148029149
                    },
                    "southwest": {
                        "lat": 40.98415921970849,
                        "lng": 29.0242335197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Aida - vino e cucina",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 3744,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110662058381802411228\">Aida - vino e cucina</a>"
                    ],
                    "photo_reference": "AZose0l2xxVy00Il2Jh939_OdYIrgOqmmc-xAZ7TyEWp7abpxMv-R6hq3n55fdgP5DhqaSYJz2SbYZMl_eooCVYOQb6H8cMhunZspg3OuQ7JDhUlVn_F9WukDxyb3tjKwrF7Wg0zy3G1RQMKibDNU00MoT-2q8nf439IdZi2ZM_N6OO1vPdL",
                    "width": 5616
                }
            ],
            "place_id": "ChIJGcHl12C4yhQRnKlUgJydtvI",
            "plus_code": {
                "compound_code": "X2PG+56 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+56"
            },
            "price_level": 3,
            "rating": 4.4,
            "reference": "ChIJGcHl12C4yhQRnKlUgJydtvI",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1165,
            "vicinity": "Caferağa, no: 10, Ressam Şeref Akdik Sokağı No:10"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9856966,
                    "lng": 29.02597479999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9870417802915,
                        "lng": 29.02733288029149
                    },
                    "southwest": {
                        "lat": 40.9843438197085,
                        "lng": 29.0246349197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Tahin",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 253,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103978529005376821790\">Tahin Restoran, Moda-Kadıköy</a>"
                    ],
                    "photo_reference": "AZose0l80G_BYMkAsQ1GUH_xyNT5o1CwEwaqfIe6qICiMUEPYbVoNsc21izM4S9bh-1ddBTZFJutGqpHO1A5ZI_JK7H1Dz1P8oSdo7ru7rFLGtpBFd5lcXGR5JtLKE9z-6VIj_NSGak7G0JzvQ6Susv6qHSWbUE1gyufxySuzpky1oD-LRIP",
                    "width": 380
                }
            ],
            "place_id": "ChIJmcEjLGG4yhQRLuiV1O-w9ao",
            "plus_code": {
                "compound_code": "X2PG+79 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+79"
            },
            "price_level": 2,
            "rating": 4.2,
            "reference": "ChIJmcEjLGG4yhQRLuiV1O-w9ao",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 808,
            "vicinity": "Caferağa mah. Dr. Esat Işık cad, Dalga Sokak No:2/A"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9862172,
                    "lng": 29.0259589
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9875203302915,
                        "lng": 29.0272141802915
                    },
                    "southwest": {
                        "lat": 40.9848223697085,
                        "lng": 29.0245162197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
            "name": "Bakkal Kokteyl Bar",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109823641887983322368\">Bakkal Koktely Bar</a>"
                    ],
                    "photo_reference": "AZose0kNeyE7hNDhTIJ0UrkpMaOz1ohgN-JTx-h2foSRFYNhv4TtAndPPfqc1KFdGTQPHwLFRPnUypEdkEEMVr6cc4izq0FznQYc6lLwoaGS9BjptAtSO3h-6NXSj5JbcHdI5VSNfQKQpKdP681KA8ijSttNGgnTZJjjBD9vlE1pTo_huoQB",
                    "width": 3264
                }
            ],
            "place_id": "ChIJ1xk-1Ga4yhQR39nomxDIawk",
            "plus_code": {
                "compound_code": "X2PG+F9 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+F9"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJ1xk-1Ga4yhQR39nomxDIawk",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 341,
            "vicinity": "Caferağa, Doktor Esat Işık Caddesi No:5"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9859703,
                    "lng": 29.02638289999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98733038029149,
                        "lng": 29.0276912802915
                    },
                    "southwest": {
                        "lat": 40.98463241970849,
                        "lng": 29.0249933197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "BroX Burger&More",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100224391330520023581\">Mr Baris</a>"
                    ],
                    "photo_reference": "AZose0l_sjZ5QRIwcdAXpuBoFp2izFJwwnZSi52e-CARWUXSIGs67AtN2RRbVQ95xfWSx1zYjDeokDDlMEoaPVqipLFJ2fwugqAkcb5mtl3G9OgqnqFvsfngy5nSB7gdTh0RkjglCs7G0kv6nFDOfBgFuI6OLS7EIngTYaWdYImqsFgpjFlv",
                    "width": 3024
                }
            ],
            "place_id": "ChIJO4-h0ma4yhQRarZDWv16ApM",
            "plus_code": {
                "compound_code": "X2PG+9H Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+9H"
            },
            "rating": 4.6,
            "reference": "ChIJO4-h0ma4yhQRarZDWv16ApM",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 273,
            "vicinity": "Caferağa, Kadife Sokak No:39"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9860565,
                    "lng": 29.0264257
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9874167802915,
                        "lng": 29.0277334802915
                    },
                    "southwest": {
                        "lat": 40.9847188197085,
                        "lng": 29.0250355197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
            "name": "Punch Flu",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 720,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101611039380863401261\">özyuvam apart</a>"
                    ],
                    "photo_reference": "AZose0mpVFjpDja36ae91cBlfwHIf7-kl5moMhezRtTGqapupuXPChOlCtmZuE6X4Wpn2J2ic5qardwkhNONoETYWpCs9OY9sD7S4zcqQO3S2KISov9yIOLNK8LAO8EqLZaOetwPHp5jMe8p5Zq7xc4V8nR8PnTfDwi6DZJ4RXeV6JQog916",
                    "width": 1280
                }
            ],
            "place_id": "ChIJU0HpzWa4yhQRajjUC91P-lc",
            "plus_code": {
                "compound_code": "X2PG+CH Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+CH"
            },
            "rating": 4.2,
            "reference": "ChIJU0HpzWa4yhQRajjUC91P-lc",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 76,
            "vicinity": "Caferağa, Kadife Sokak No:35"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.98678999999999,
                    "lng": 29.02538
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.98813173029149,
                        "lng": 29.0267242302915
                    },
                    "southwest": {
                        "lat": 40.9854337697085,
                        "lng": 29.0240262697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "B.O.B Fried Chicken",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2928,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115743531633424447210\">Raşit Yeşildal</a>"
                    ],
                    "photo_reference": "AZose0mbx78BRLOIBrf8dTY22xdiG1gO09lqBaDj3v3cEh8U0bAV_vOux_6qgrgt-FxcOes-iWwWmU2mmD_xxdqwNo7wJ716KmWAs6DFV7RsKyjh0V3KmRrs5wYFKYkrQfboM5EZywMOpHTah1gXLQOXVt_y45lMu1STAxK30YpGDm-M-awe",
                    "width": 3907
                }
            ],
            "place_id": "ChIJfblEJme4yhQRmMdUH0UGRy0",
            "plus_code": {
                "compound_code": "X2PG+P5 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+P5"
            },
            "rating": 4.2,
            "reference": "ChIJfblEJme4yhQRmMdUH0UGRy0",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1279,
            "vicinity": "Caferağa, Kağnı Sokak No:2"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9849116,
                    "lng": 29.0258978
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9861984802915,
                        "lng": 29.0272070802915
                    },
                    "southwest": {
                        "lat": 40.9835005197085,
                        "lng": 29.0245091197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet",
            "name": "Chaya Moda",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 5472,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102505348540420205856\">Cha’ya Moda</a>"
                    ],
                    "photo_reference": "AZose0lkd6nogowX2xElKHfMZfeA0KageFt5WF91DvwpTdBNQ5U_HWwySlPj7Tm-1Lv6KVrtAMKO4Ydx8sE5HjMFJ7iRRdlMIyBJD4qeXkPW37eL9_oPXbl0m6C_hVYr6O2XuJZn05VBRx0ea8zd1lc6OCx4-rXlTCY3lPLL_2aklm1ArQ8D",
                    "width": 3648
                }
            ],
            "place_id": "ChIJnVf0H2G4yhQRuC57_a4McnM",
            "plus_code": {
                "compound_code": "X2MG+X9 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2MG+X9"
            },
            "price_level": 2,
            "rating": 4.3,
            "reference": "ChIJnVf0H2G4yhQRuC57_a4McnM",
            "scope": "GOOGLE",
            "types": [
                "cafe",
                "restaurant",
                "point_of_interest",
                "food",
                "store",
                "establishment"
            ],
            "user_ratings_total": 403,
            "vicinity": "Caferağa, Bademaltı Sokak 17/B"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.98684189999999,
                    "lng": 29.0254767
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9881864802915,
                        "lng": 29.0268985302915
                    },
                    "southwest": {
                        "lat": 40.9854885197085,
                        "lng": 29.0242005697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
            "name": "DRAFT",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2000,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112920371750783691291\">DRAFT</a>"
                    ],
                    "photo_reference": "AZose0l_Yyk5in0PDlSKGzFNWDw1lTaUFmFAeehV-DCq9w_dxqEELvQixxbFFclAR8RhVwKyRkcy5YMA5QZoL4R2GGPYmlQPdYLiu_GBGM6o5jOXe1PsWQzKkQsaj7m-mTRU-7x_O_WKNNFcD5jDbWZ6X1b3KkL0kkM7MJg6F-bdcxZLOEYl",
                    "width": 1910
                }
            ],
            "place_id": "ChIJrwA_G2e4yhQRzxayXUKf0OE",
            "plus_code": {
                "compound_code": "X2PG+P5 Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+P5"
            },
            "price_level": 2,
            "rating": 4.2,
            "reference": "ChIJrwA_G2e4yhQRzxayXUKf0OE",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1029,
            "vicinity": "Caferağa, Moda Caddesi No:64"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 40.9863782,
                    "lng": 29.02640869999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 40.9877186802915,
                        "lng": 29.0277878802915
                    },
                    "southwest": {
                        "lat": 40.9850207197085,
                        "lng": 29.0250899197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
            "name": "BİNA",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1034,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109166838357931678139\">BİNA</a>"
                    ],
                    "photo_reference": "AZose0mQLOcu9eGSOy5_Po07n8Ei6J0CWPPCXWkh0ZlidzaPc3jNlo4gWLHrQIPwPIrBZ6zI8l_nX15i7jnfY6vv4iEWuhbG7UmpQqKSobopilIzIaNmkpDoXo6bwG4fzH0QsnQua34YEaQm2nE6BBlnLwCCgjWfxOcD78JPkm5FmLm4N3xf",
                    "width": 1280
                }
            ],
            "place_id": "ChIJxRjzz2a4yhQR3mR-GWgVj7I",
            "plus_code": {
                "compound_code": "X2PG+HH Kadıköy/İstanbul, Türkiye",
                "global_code": "8GGFX2PG+HH"
            },
            "price_level": 2,
            "rating": 3.6,
            "reference": "ChIJxRjzz2a4yhQR3mR-GWgVj7I",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "night_club",
                "cafe",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1347,
            "vicinity": "Caferağa, Kadife Sokak No:26"
        }
    ],
    "status": "OK"

}*/
let places;
function clickRequest(){
    sendRequest(URL, 'GET')
        .then(data => {   
            places = data;
            //console.log(JSON.stringify(places.results))
            createPageButtons(places.results,7);
        })
        .catch(err => {
            console.error(err)
        })
    console.log('click')
}

document.getElementById('button-search-button').addEventListener('click', clickRequest);

function getPlacesWithPage(places_array,page,limit){
    const startIndex= (page-1)*limit;
    const endIndex= page*limit;

    let results = [];
    results= places_array.slice(startIndex,endIndex);
    console.log(results);

    //to list all wished places
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let place of results){
            out += `
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <td class="text-center">
                        <div class="space-x-3 ">
                            <div>
                                <div class="font-bold">${place.name}</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-center">
                        ${place.rating}
                    </td>
                    <td class="text-center">${place.user_ratings_total}</td>
                    <th>
                        <label for="my-drawer-4" class="drawer-button btn">Details</label>
                    </th>
                </tr>
            `;
            placeholder.innerHTML = out;
    }
}

function createPageButtons(places_array,limit){
    const lastPage = Math.ceil(places_array.length / limit);

//to show exact paging button numbers
    let placeholder_btn = document.querySelector("#paging-buttons");
    let out_btn = "";
    let i;
    for(i=1; i<=lastPage; i++){
            out_btn += `
            <button class="join-item btn" id="btn${i}">${i}</button>
            `;
    }
    placeholder_btn.innerHTML = out_btn;

    getPlacesWithPage(places_array,1,limit);

    let buttons = document.querySelectorAll('.join-item');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let page = parseInt(button.innerText);
            console.log(button.innerText);
            getPlacesWithPage(places.results,page, 7);
        })
    })
}

// function fetchPlaces(places_array,page){

//     let limit=7;

//     const lastPage = Math.ceil(places_array.length / limit);
//     const startIndex= (page-1)*limit;
//     const endIndex= page*limit;

//     let results = [];
//     results= places_array.slice(startIndex,endIndex+1);

    

// //to show exact paging button numbers
//     let placeholder_btn = document.querySelector("#paging-buttons");
//     let out_btn = "";
//     let i;
//     for(i=1; i<=lastPage; i++){
//             out_btn += `
//             <button class="join-item btn" id="btn${i}" onclick="fetchPlaces(places.results,${i})">${i}</button>
//             `;
//             placeholder_btn.innerHTML = out_btn;
//     }

// //to list all wished places
//     let placeholder = document.querySelector("#data-output");
//     let out = "";
//     for(let place of results){
//         if(place.rating > 0){
//             out += `
//                 <tr>
//                     <th>
//                         <label>
//                             <input type="checkbox" class="checkbox" />
//                         </label>
//                     </th>
//                     <td class="text-center">
//                         <div class="space-x-3 ">
//                             <div>
//                                 <div class="font-bold">${place.name}</div>
//                             </div>
//                         </div>
//                     </td>
//                     <td class="text-center">
//                         ${place.rating}
//                     </td>
//                     <td class="text-center">${place.user_ratings_total}</td>
//                     <th>
//                         <label for="my-drawer-4" class="drawer-button btn">Details</label>
//                     </th>
//                 </tr>
//             `;
//             placeholder.innerHTML = out;
//         }
//     }
// }





