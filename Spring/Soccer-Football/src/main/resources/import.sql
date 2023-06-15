
insert into user_entity (account_non_expired, account_non_locked, avatar,credentials_non_expired, enabled, first_name, last_name, password, phone,  email, roles, username, id) values (true, true, 'https://robohash.org/ale',true, true, 'Alejandro', 'Fernandez', '{bcrypt}$2a$12$H3ll7X8X096PtEsIBEIcxOTGksMp6T6wib6mTOi31v9CH/NI/Rp2a', '618123995','alejantus06@gmail.com','USER', 'ale1234', 'd55285a1-154f-4956-8498-cad29c58fb4d')
insert into user_entity (account_non_expired, account_non_locked, avatar,credentials_non_expired, enabled, first_name, last_name, password, phone, email,roles, username, id) values (true, true, 'https://robohash.org/luismi',true, true, 'Luis Miguel', 'Lopez', '{bcrypt}$2a$12$H3ll7X8X096PtEsIBEIcxOTGksMp6T6wib6mTOi31v9CH/NI/Rp2a', '619971902','admin@gmail.com','ADMIN', 'admin', 'b6511083-930a-4a0e-882d-e536af7cb35c')

insert into league (id, league_name) values (NEXTVAL('hibernate_sequence'),'KingsLeague')
insert into league (id, league_name) values (NEXTVAL('hibernate_sequence'),'La Liga Santander')

insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Porcinos FC', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Ultimate Mostoles', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Saiyans FC', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'ElBarrio', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'PIO', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), '1K', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Kunisports', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Troncos FC', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Jijantes FC', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Aniquiladores FC', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Xbuyer Team', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Rayo de Barcelona', 1)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Real Betis Balompie', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Sevilla FC', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Real Madrid', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'FC Barcelona', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Atletico de Madrid', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Real Valladolid', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Real Sociedad', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Villarreal', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Valencia', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Athletic Club', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Elche', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Girona', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Osasuna', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Rayo Vallecano', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Getafe', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Cadiz', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Almería', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Celta de Vigo', 2)
insert into team (id, team_name, league_id) values (NEXTVAL('hibernate_sequence'), 'Espanyol', 2)

insert into post (id , date , image , title , user_id) values (NEXTVAL('hibernate_sequence'),current_timestamp,'logoWindows.png','El mejor dia de mi vida','d55285a1-154f-4956-8498-cad29c58fb4d')
insert into post (id , date , image , title , user_id) values (NEXTVAL('hibernate_sequence'),current_timestamp,'logoWindows.png','El peor dia de mi vida','d55285a1-154f-4956-8498-cad29c58fb4d')

insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'),'No es muy entretenida',current_timestamp , 34,'d55285a1-154f-4956-8498-cad29c58fb4d')
insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'), 'Es muy entretenida',current_timestamp , 34,'d55285a1-154f-4956-8498-cad29c58fb4d')
insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'), 'No comprendo tu foto',current_timestamp , 34,'d55285a1-154f-4956-8498-cad29c58fb4d')
insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'), 'Es muy divertida',current_timestamp , 34,'d55285a1-154f-4956-8498-cad29c58fb4d')
insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'), 'No entendi la referencia',current_timestamp , 35,'d55285a1-154f-4956-8498-cad29c58fb4d')
insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'), 'Divertidisimo',current_timestamp , 35,'d55285a1-154f-4956-8498-cad29c58fb4d')
insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'), 'No me gusta nada tu foto',current_timestamp , 35,'d55285a1-154f-4956-8498-cad29c58fb4d')
insert into comment (id, content, date , post_id , user_id) values (NEXTVAL('hibernate_sequence'), 'Es muy entretenida',current_timestamp , 35,'d55285a1-154f-4956-8498-cad29c58fb4d')

<<<<<<< HEAD
insert into player (id , age , country , height , jersey_number , name , position , weight , team_id) values (NEXTVAL('hibernate_sequence'),'33','España' , 176, 10, 'Sergio Canales','midfielder',65,15)
=======
insert into player (id , country , height , jersey_number , name , position , weight , team_id) values (NEXTVAL('hibernate_sequence'),'España' , 176, 10, 'Sergio Canales','centrocampista',65,15)
>>>>>>> 1-develop-mobile
