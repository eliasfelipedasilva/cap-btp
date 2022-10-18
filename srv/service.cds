using { db.tabelas as db  } from '../db/db';
@path : 'service'
service UserService {
    entity user as projection on db.Users;

    action ImprimeUserDia  (user : String, teste : Integer) returns String;
}