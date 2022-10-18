namespace db.tabelas;

entity Users  {
    key id : String;
    nome   : String;
    pais   : String;
    idioma : Idioma default 'EN';
}

type Idioma : String enum {
    Ingles = 'EN'; Portugues = 'PT'
}