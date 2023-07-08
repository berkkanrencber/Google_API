const place_name = document.getElementById('place-name');
const place_rating = document.getElementById('place-rating');
const place_address = document.getElementById('place-address');
const place_phone = document.getElementById('place-phone');
const place_user_total_rating = document.getElementById('place-user-total-rating');
const place_url = document.getElementById('place-url');
const place_weekday_text = document.getElementById('place-weekday-text');
const place_types = document.getElementById('place-types');


const place_details = {
    "html_attributions": [],
    "result": {
        "address_components": [
            {
                "long_name": "No.90",
                "short_name": "No.90",
                "types": [
                    "street_number"
                ]
            },
            {
                "long_name": "Moda Caddesi",
                "short_name": "Moda Cd.",
                "types": [
                    "route"
                ]
            },
            {
                "long_name": "Caferağa",
                "short_name": "Caferağa",
                "types": [
                    "administrative_area_level_4",
                    "political"
                ]
            },
            {
                "long_name": "Kadıköy",
                "short_name": "Kadıköy",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Kadıköy",
                "short_name": "Kadıköy",
                "types": [
                    "administrative_area_level_2",
                    "political"
                ]
            },
            {
                "long_name": "İstanbul",
                "short_name": "İstanbul",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "Türkiye",
                "short_name": "TR",
                "types": [
                    "country",
                    "political"
                ]
            },
            {
                "long_name": "34710",
                "short_name": "34710",
                "types": [
                    "postal_code"
                ]
            }
        ],
        "adr_address": "Caferağa Mahallesi, <span class=\"street-address\">Caferağa, Moda Caddesi No:90/B, Moda Cd. No.90</span>, <span class=\"postal-code\">34710</span> <span class=\"locality\">Kadıköy</span>/<span class=\"region\">İstanbul</span>, <span class=\"country-name\">Türkiye</span>",
        "business_status": "OPERATIONAL",
        "current_opening_hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "date": "2023-06-05",
                        "day": 1,
                        "time": "0100"
                    },
                    "open": {
                        "date": "2023-06-04",
                        "day": 0,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "date": "2023-06-06",
                        "day": 2,
                        "time": "0100"
                    },
                    "open": {
                        "date": "2023-06-05",
                        "day": 1,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "date": "2023-06-06",
                        "day": 2,
                        "time": "2359",
                        "truncated": true
                    },
                    "open": {
                        "date": "2023-06-06",
                        "day": 2,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "date": "2023-05-31",
                        "day": 3,
                        "time": "0100"
                    },
                    "open": {
                        "date": "2023-05-31",
                        "day": 3,
                        "time": "0000",
                        "truncated": true
                    }
                },
                {
                    "close": {
                        "date": "2023-06-01",
                        "day": 4,
                        "time": "0100"
                    },
                    "open": {
                        "date": "2023-05-31",
                        "day": 3,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "date": "2023-06-02",
                        "day": 5,
                        "time": "0100"
                    },
                    "open": {
                        "date": "2023-06-01",
                        "day": 4,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "date": "2023-06-03",
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "date": "2023-06-02",
                        "day": 5,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "date": "2023-06-04",
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "date": "2023-06-03",
                        "day": 6,
                        "time": "1400"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 2:00 PM – 1:00 AM",
                "Tuesday: 2:00 PM – 1:00 AM",
                "Wednesday: 2:00 PM – 1:00 AM",
                "Thursday: 2:00 PM – 1:00 AM",
                "Friday: 2:00 PM – 2:00 AM",
                "Saturday: 2:00 PM – 2:00 AM",
                "Sunday: 2:00 PM – 1:00 AM"
            ]
        },
        "delivery": false,
        "dine_in": true,
        "formatted_address": "Caferağa Mahallesi, Caferağa, Moda Caddesi No:90/B, Moda Cd. No.90, 34710 Kadıköy/İstanbul, Türkiye",
        "formatted_phone_number": "(0216) 330 22 44",
        "geometry": {
            "location": {
                "lat": 40.985789,
                "lng": 29.025093
            },
            "viewport": {
                "northeast": {
                    "lat": 40.98713323029149,
                    "lng": 29.0264583802915
                },
                "southwest": {
                    "lat": 40.98443526970849,
                    "lng": 29.0237604197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "international_phone_number": "+90 216 330 22 44",
        "name": "Duble Muhabbet Meyhane",
        "opening_hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0100"
                    },
                    "open": {
                        "day": 0,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0100"
                    },
                    "open": {
                        "day": 1,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0100"
                    },
                    "open": {
                        "day": 2,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0100"
                    },
                    "open": {
                        "day": 3,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0100"
                    },
                    "open": {
                        "day": 4,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1400"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1400"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 2:00 PM – 1:00 AM",
                "Tuesday: 2:00 PM – 1:00 AM",
                "Wednesday: 2:00 PM – 1:00 AM",
                "Thursday: 2:00 PM – 1:00 AM",
                "Friday: 2:00 PM – 2:00 AM",
                "Saturday: 2:00 PM – 2:00 AM",
                "Sunday: 2:00 PM – 1:00 AM"
            ]
        },
        "photos": [
            {
                "height": 2250,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117982511554925599340\">E. Devrim</a>"
                ],
                "photo_reference": "AZose0m7L9Yn-BbwMmXR8JpeHWizWwwRMQpKU6Kug9vHCTBt6zjjbkEWMuBrzLPxmSDP8tEQcBxB3FujwGUodtNZ51FN0-GvoFnntR7Ze0FCtrVBc5az-uxn4lzGUFBi6DlMcy3XlXMvcDYVDkM2j03T_xQqZNcKg1qdcu5WXJJfVFvxMKr1",
                "width": 4000
            },
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113503714759847671879\">Andrei Sukhoruchkin</a>"
                ],
                "photo_reference": "AZose0nv1QIzmdFf2jGCxjwCxLBC0wKzz3zQnhj8Q0KX4ltYYdUm-uJ8nIhoB0Rbxs3mMlJ7FBw4QZ_sTTA7fBP_JEiWkJgYEWbkUoul7Hh30D0yOhhbumZvCy8irdcm2Jt2K1mcO4d8ine5VD1rmtNgUzwKW-xffyxyE85EdBAHPxo9Y8ky",
                "width": 6000
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107386230178544921456\">Ayşe Nur</a>"
                ],
                "photo_reference": "AZose0nDyoLTE6KvS8oGPrTGiCfM799rB5ykRPBzqGVGlMe0-YB4blpbGOjLX2rEeU06bpxiDouOxAocoZsUOtRpeUHOGUZlzDIL7Jhw3moloIYKfXUHhmiZGXfR3E9Iu3DdanIRR7NGuD68qtHZwgNESyc4sHx5FDfWDK1Km_GDBtKcgFsB",
                "width": 3024
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111941997638072992007\">Tutku Meriç Taybars</a>"
                ],
                "photo_reference": "AZose0l_8K7OY8VTSYljGL-zzvCUNiKGDburBEFdAv5Y4vi6Zbv_t5MeTwYtpyDLT5oy-jqCsRqjZrX6Z9gNtFDUEiPSK5XNjHnP-lb_sC8elHo8xdfI1Qr7GN3S6iwTedxPT1HFiTylKJVcl8nGV501KpU9IIkrAwX-1XCslyjpgTtE_Omz",
                "width": 1920
            },
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102375228409863517149\">Mete Can Özbay</a>"
                ],
                "photo_reference": "AZose0l2OY86gp9d73j73UMUUcozm3cr7CAZNvDOCi7MMvrlfpJ5ASnkh9cs1BRgICvUCQXLu7vB0qcyfPz4FhJgrzJ6Y_n-b3DKdWaG3GHqsSHfYO_FjehnE1fEh3glXcnJ2oasQRJtavoF_m9IOM_gaS5k3n0qlwcy7f0AOmWrEU3cGwo7",
                "width": 4000
            },
            {
                "height": 4128,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111474288589056999498\">mine “minnie” ugurlar</a>"
                ],
                "photo_reference": "AZose0lqZO_kDCImwzw0bDCm1lcZGwDDOBlKZlHb3YF6RZhUdr3GJJ3IlatXGIyQ-NW4ETlAhp3lC_jFrPrdbhw3wxsZgy6wwrkc-z4rtFHJnsgtRskqJju_JGZFSAhPIVmRcLbTI6cdO2lF_Qb4Fgno1jiP4t6e7aTF8whSgMm5gVbtf6xE",
                "width": 2322
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108458958013608688122\">mustafa gökhan albar</a>"
                ],
                "photo_reference": "AZose0mOYSfWUhrP7g6zlrc0CdveB3evHx9AxM8OwSkE_C6BxN2mzTzR6tUO-zgDpiFoaFEDJ_kYmrO31N4iZI1TtZJFgQJqylQoCvjkdSzA5krU7GSSE2B09TK2gqNU3ob_laiSiiD9xLEhXVs6_yLMcgvfgiPy4APDJLmK8vDB9pVHL1iy",
                "width": 3024
            },
            {
                "height": 1334,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118417036845305867043\">SH</a>"
                ],
                "photo_reference": "AZose0lngi7j2hMcTDSNU0SryUAsibhgIw6sZGQaPWyI-PRwf3Kh_xh-Hn4zv75albiq07ii2EaI8HzsRLd_7xRgslEDlrxQj9pBkbW-kpKJa9o9sFQDcq_gQlYv8m6uX487r9CyzJJ7wjiirnOqRhUIwnPbIedj5BQ5u44rxAn8PtlS2RP2",
                "width": 750
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115352033514602859553\">İlker Üçgül</a>"
                ],
                "photo_reference": "AZose0mmoypA5aGSRp3CMUzJrsg0DjPoK5buuO_JSSnom_EonmZsd1k6R-NygPBbuUDPiYm_kMP2PbCSdBfFvrpZK5p0S1nxSDtlikfBGQoWX-PgIaD_2atfqqy8_Ca3sST2mMtGkONhj1a72-eKbmcpVERZTjqJuGMVZkme6u0IGE3laXLs",
                "width": 2268
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107386230178544921456\">Ayşe Nur</a>"
                ],
                "photo_reference": "AZose0kcowynkztNVqCG_o9nTZf3DKMy3umsADsBnu8z8febJf5256owGu5H-SvQ4Fet3-ryc-1UOenIzIM09YcLJlsGdHZuD8mEyTqWnvJDy2rYqHqpuLrtj5iYtaBQEwupaDk9bcyaW2ilkp6hvd_nqzzxqXM-vqMp_Jl-rnmaJDFdExff",
                "width": 3024
            }
        ],
        "place_id": "ChIJy1AH0WC4yhQRyUG1fKCTRwQ",
        "plus_code": {
            "compound_code": "X2PG+82 Kadıköy/İstanbul, Türkiye",
            "global_code": "8GGFX2PG+82"
        },
        "rating": 3.4,
        "reference": "ChIJy1AH0WC4yhQRyUG1fKCTRwQ",
        "reservable": true,
        "reviews": [
            {
                "author_name": "Hyunsang Joo",
                "author_url": "https://www.google.com/maps/contrib/108932891041356277442/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AD_cMMQc0sMWZ3GLTrQaHDx57j_noCU1iOxvMk5YSNmWdqw=s128-c0x00000000-cc-rp-mo",
                "rating": 1,
                "relative_time_description": "3 years ago",
                "text": "The worst restaurant ever. They pushed us to have more dishes and tried to rip off.",
                "time": 1568051722,
                "translated": false
            },
            {
                "author_name": "Kostas Koutretsis",
                "author_url": "https://www.google.com/maps/contrib/108689636132055573293/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AD_cMMQQLuOpGinLvEdo_vanyXP8EptZ1QqA5boHIlSi=s128-c0x00000000-cc-rp-mo",
                "rating": 2,
                "relative_time_description": "7 months ago",
                "text": "There are so many places you can eat better in Istanbul, do your self a favor and avoid this one. Bad taste, cold dishes the only reason that I'm giving 2 stars is the friendly staff.",
                "time": 1667237189,
                "translated": false
            },
            {
                "author_name": "George Sakellis",
                "author_url": "https://www.google.com/maps/contrib/118062494840909961860/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a/AAcHTtdQTSpILv2xHeLP8iLByohcGfzvMKRhkAl7cb9g=s128-c0x00000000-cc-rp-mo",
                "rating": 1,
                "relative_time_description": "7 months ago",
                "text": "Very expensive with the lowest quality. Shame for the fame of the delicious Turkish cuisine. Warning: Do not enter.",
                "time": 1667264979,
                "translated": false
            },
            {
                "author_name": "Alena Guzharina",
                "author_url": "https://www.google.com/maps/contrib/107214472620553434622/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AD_cMMTlP5mz_rGfA6Gwbc2HEnmxFunix7BEcp4MRNoKvM0=s128-c0x00000000-cc-rp-mo",
                "rating": 1,
                "relative_time_description": "a year ago",
                "text": "They charged additionally 90 lira for compliment food. Long waiting time. Don’t recommend",
                "time": 1653502721,
                "translated": false
            },
            {
                "author_name": "Liubov Vasileva",
                "author_url": "https://www.google.com/maps/contrib/106589365524183184421/reviews",
                "language": "en",
                "original_language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AD_cMMRcxrcSLgXDTlVlK9BDGgPladjVFE5lpmRd4ammGw=s128-c0x00000000-cc-rp-mo",
                "rating": 5,
                "relative_time_description": "a year ago",
                "text": "Everything was perfect! Friendly waiters, nice food. Don’t trust bad marks!",
                "time": 1631298231,
                "translated": false
            }
        ],
        "serves_beer": true,
        "serves_dinner": true,
        "serves_wine": true,
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "url": "https://maps.google.com/?cid=308377416994472393",
        "user_ratings_total": 212,
        "utc_offset": 180,
        "vicinity": "Caferağa, Caferağa Mahallesi, Moda Caddesi No:90/B, Moda Caddesi No.90, Kadıköy"
    },
    "status": "OK"
}


 

