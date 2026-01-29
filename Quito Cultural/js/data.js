/**
 * BASE DE DATOS DE SITIOS CULTURALES
 * Patrón Singleton - Datos centralizados de la aplicación
 */

const sitesData = [
    {
        id: 1,
        name: "La Compañía de Jesús",
        category: "Iglesia",
        description: "La joya del barroco latinoamericano. Su interior está cubierto con láminas de oro de 23 quilates que representan aproximadamente 7 toneladas del metal precioso. Construida entre 1605 y 1765, es considerada una de las iglesias más hermosas del continente. Los altares, columnas y techos están completamente decorados con pan de oro, creando un efecto visual impresionante. Una parada obligatoria para entender el arte colonial y la Escuela Quiteña.",
        address: "García Moreno S1-21 y Sucre",
        image: "img/iglesia_compania.JPG",
        audio: "assets/audio_1.mp3",
        accessible: true,
        xp: 50
    },
    {
        id: 2,
        name: "Museo de la Ciudad",
        category: "Museo",
        description: "Ubicado en el antiguo Hospital San Juan de Dios, fundado en 1565. Este museo interactivo ofrece un recorrido cronológico fascinante por la vida cotidiana de los habitantes de Quito desde la época prehispánica hasta el siglo XX. Cuenta con salas temáticas que recrean ambientes coloniales y republicanos, incluyendo una botica antigua, un hospital colonial y espacios dedicados a la vida urbana. Perfecto para comprender la evolución social y cultural de la capital ecuatoriana.",
        address: "Chile N3-17 y Sucre",
        image: "img/museo_de_la_ciudad.JPG",
        audio: "assets/audio_2.mp3",
        accessible: true,
        xp: 40
    },
    {
        id: 3,
        name: "Basílica del Voto Nacional",
        category: "Iglesia",
        description: "El templo neogótico más grande de América. Iniciada en 1892 e inacabada por tradición popular (se dice que cuando se termine el mundo acabará). Su característica más distintiva son las gárgolas que representan la fauna ecuatoriana: iguanas, tortugas galápagos, piqueros de patas azules, armadillos y caimanes, en lugar de las figuras mitológicas europeas tradicionales. Ofrece impresionantes vistas panorámicas de Quito desde sus torres de 115 metros de altura.",
        address: "Calle Venezuela y Carchi",
        image: "img/iglesia_basilica.jpg",
        accessible: false,
        xp: 60
    },
    {
        id: 4,
        name: "Plaza Grande",
        category: "Plaza",
        description: "El corazón político e histórico de la ciudad de Quito. Conocida oficialmente como Plaza de la Independencia, está rodeada por edificios emblemáticos: el Palacio de Carondelet (sede presidencial), la Catedral Metropolitana, el Palacio Arzobispal y el Palacio Municipal. En su centro se encuentra el Monumento a los Héroes de la Independencia. Es el punto de encuentro de manifestaciones cívicas, celebraciones y eventos culturales. Ideal para observar la arquitectura colonial y republicana.",
        address: "Chile entre Sucre y García Moreno",
        image: "img/plaza_grande.jpg",
        audio: "assets/audio_4.mp3",
        accessible: true,
        xp: 30
    },
    {
        id: 5,
        name: "San Francisco",
        category: "Iglesia",
        description: "El conjunto arquitectónico religioso más grande de Sudamérica, con más de 3.5 hectáreas. Fundado apenas 50 días después de la fundación española de Quito en 1534. La iglesia combina elementos renacentistas, barrocos y mudéjares. Su plaza, la más grande del Centro Histórico, ha sido testigo de importantes acontecimientos de la historia ecuatoriana. Alberga el Museo Fray Pedro Gocial con obras maestras de la Escuela Quiteña, incluyendo pinturas y esculturas de gran valor artístico.",
        address: "Cuenca entre Sucre y Bolívar",
        image: "img/iglesia_san_francisco.JPG",
        audio: "assets/audio_5.mp3",
        accessible: true,
        xp: 55
    },
    {
        id: 6,
        name: "Museo Casa del Alabado",
        category: "Museo",
        description: "Una extraordinaria colección privada de más de 5,000 piezas de arte precolombino ecuatoriano. Ubicado en una casona colonial bellamente restaurada del siglo XVII. El museo presenta objetos ceremoniales, figuras antropomorfas, cerámica, textiles y ornamentos de culturas como Valdivia, Chorrera, Jama-Coaque, Tolita, Guangala y más. La exhibición está organizada temáticamente explorando conceptos como chamanismo, ancestros y cosmovisión andina. Incluye tecnología interactiva y audioguías en varios idiomas.",
        address: "Guillermo Prieto N24-285 y Cuenca",
        image: "img/museo_alabado.jpg",
        audio: "assets/audio_6.mp3",
        accessible: true,
        xp: 45
    },
    {
        id: 7,
        name: "El Panecillo",
        category: "Plaza",
        description: "Una elevación natural de 3,000 metros sobre el nivel del mar que divide Quito en norte y sur. Coronada por la estatua de la Virgen de Quito (Virgen Alada), de 45 metros de altura, hecha de 7,000 piezas de aluminio. Desde su cima se obtiene una vista panorámica de 360 grados de la ciudad y los volcanes circundantes. El nombre proviene de su forma que recuerda a un pequeño pan. Es uno de los miradores naturales más visitados y fotografiados de la capital.",
        address: "Gral. Melchor Aymerich",
        image: "img/panecillo.jpg",
        audio: "assets/audio_7.mp3",
        accessible: false,
        xp: 35
    },
    {
        id: 8,
        name: "Catedral Metropolitana",
        category: "Iglesia",
        description: "La catedral principal de Quito, ubicada en el costado sur de la Plaza Grande. Iniciada en 1562, es uno de los templos más antiguos de América del Sur. Su interior alberga tumbas de ilustres personajes de la historia ecuatoriana, incluyendo al Mariscal Antonio José de Sucre. Destacan sus capillas laterales con retablos dorados, pinturas coloniales de la Escuela Quiteña y esculturas de gran valor histórico. La fachada muestra una mezcla de estilos arquitectónicos que reflejan las distintas etapas de construcción.",
        address: "Venezuela entre Chile y Sucre",
        image: "img/iglesia_catedral.jpg",
        audio: "assets/audio_8.mp3",
        accessible: true,
        xp: 40
    }
];