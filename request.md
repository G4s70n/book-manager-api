
post | http://localhost:3001/authors
                                        {
                                        "name": "Esteban",
                                        "last_name": "Quito",
                                        "birthday": "1981-09-21"
                                        }

post | http://localhost:3001/books
                                        {
                                        "title": "La programación",
                                        "description": "Libro sobre programación.",
                                            "publication_date": "2022-05-19",
                                            "author_id": 1
                                        }


put | http://localhost:3001/books/1
                                        {
                                        "title": "Cómo jugara al golf",
                                        "description": "Libro sobre deportes.",
                                            "publication_date": "2022-05-19",
                                            "author_id": 1
                                        }


get | http://localhost:3001/books


delete| http://localhost:3001/books/