var config = {
    // TUS DATOS DE MAPBOX
    style: 'mapbox://styles/danielmartinagost/cmiyi8kzj001y01sb497ahybz',
    accessToken: 'pk.eyJ1IjoiZGFuaWVsbWFydGluYWdvc3QiLCJhIjoiY21peWdrMGk0MDV0YzNkc2RrZmI2N2s4eCJ9.URxIQ21zxsS9wBO070ZGeA', 
    
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true, // Minimapa activado
    theme: 'dark', 
    use3dTerrain: true, // Terreno 3D activado
    
    title: 'Madrid: La Brecha Invisible',
    subtitle: 'Un análisis visual de la desigualdad económica y la seguridad.',
    byline: 'Por Daniel Martin | Datos: Ayto. Madrid',
    footer: 'Análisis basado en datos de Renta 2023 y Criminalidad del Portal de Datos Abiertos.',
    
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'Una Ciudad, Dos Realidades',
            image: './assets/skylinejpg.jpg', 
            description: 'Madrid es una metrópolis de contrastes. A vista de pájaro parece uniforme, pero los datos revelan profundas fracturas. En este análisis exploraremos la <b>cicatriz norte-sur</b> de la renta y cómo se relaciona con la seguridad ciudadana. <br><br><b>👉 Haz clic en las zonas para ver el dato exacto.</b>',
            location: {
                center: [-3.6883, 40.4530],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            legendType: 'NONE', // Sin leyenda
            activeLayer: '', // Ninguna capa activa para clic
            onChapterEnter: [
                 { layer: 'RENTA', opacity: 0 },
                 { layer: 'CRIMINALIDAD', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'renta',
            alignment: 'left',
            hidden: false,
            title: 'El Muro Económico',
            image: './assets/renta.jpg',
            description: 'La brecha es física. Mientras en Salamanca o Chamartín la renta media supera los 26.000€, cruzando apenas unos kilómetros hacia el sur, en Puente de Vallecas o Usera, los ingresos caen por debajo de los 19.000€. No es solo un cambio de color en el mapa; es una diferencia drástica en oportunidades y calidad de vida.',
            location: {
                center: [-3.7037, 40.4167], 
                zoom: 10.5,
                pitch: 45, 
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            legendType: 'RENTA', 
            activeLayer: 'RENTA', // AQUÍ FORZAMOS QUE AL HACER CLIC SALGA RENTA
            onChapterEnter: [
                { layer: 'RENTA', opacity: 1, duration: 1000 },
                { layer: 'CRIMINALIDAD', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'crimen',
            alignment: 'left',
            hidden: false,
            title: 'El Semáforo de la Seguridad',
            image: './assets/criminalidad.jpeg',
            description: 'Al cambiar el mapa, la realidad sorprende. Los barrios obreros del sur se tiñen de <b>verde (seguro)</b>, mientras el centro estalla en rojo. <b>Este contraste desmiente el mito de que "pobreza es igual a inseguridad".</b> El delito en Madrid no busca la renta baja, sino la aglomeración, el turismo y el ocio nocturno.',            location: {
                center: [-3.7037, 40.4167],
                zoom: 10.5,
                pitch: 45,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            legendType: 'CRIMINALIDAD', 
            activeLayer: 'CRIMINALIDAD', // AQUÍ FORZAMOS CRIMINALIDAD
            onChapterEnter: [
                { layer: 'RENTA', opacity: 0, duration: 1000 },
                { layer: 'CRIMINALIDAD', opacity: 1, duration: 1000 }
            ],
            onChapterExit: []
        },
        {
            id: 'zoom-centro',
            alignment: 'right',
            hidden: false,
            title: 'La Paradoja del Centro',
            image: './assets/madrid.jpg', 
            description: 'La Paradoja del Centro. Al acercarnos, vemos cómo conviven rentas medias-altas con una alerta roja en seguridad. Esto rompe el estigma de que "barrio humilde es igual a barrio peligroso". ',
            location: {
                center: [-3.7035, 40.4170],
                zoom: 15,
                pitch: 65,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            legendType: "NONE",
            activeLayer: 'CRIMINALIDAD', // AQUÍ FORZAMOS CRIMINALIDAD AUNQUE HAYA ZOOM
            onChapterEnter: [
                { layer: 'CRIMINALIDAD', opacity: 0.8 }, 
                { layer: 'RENTA', opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Conclusiones',
            description: 'Los datos nos permiten ver más allá de los prejuicios. Madrid no es uniforme: es un mosaico complejo donde la riqueza no siempre garantiza la seguridad, y donde la geografía sigue marcando el destino económico de sus habitantes.',
            location: {
                center: [-3.6883, 40.4530], // Vuelve a la vista inicial
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            activeLayer: '', // Desactivar interacción para el cierre
            onChapterEnter: [
                { layer: 'RENTA', opacity: 0.5 }, // Mostrar ambas capas sutilmente o volver a la inicial
                { layer: 'CRIMINALIDAD', opacity: 0 }
            ]
        }
    ]   
};