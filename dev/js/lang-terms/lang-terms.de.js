'use strict';

var R6MLangTermsGerman = (function(R6MLangTerms, undefined) {
  var name = 'de',
    terms = {
      general: {
        pageTitleSelectMap: 'R6Maps.com - Wählen Sie eine Karte',
        cameraViewCaption: 'Überwachungskamera: {floorName}',
        shortcutTip: 'Tastaturkürzel: {shortcut}',
        menu: 'Menü',
        about: 'Über',
        languageHeader: 'Sprache',
        labelLosOpacity: 'Kamera line-of -sight Opazität',
        labelPercent: '{int} %', // according to: (0.12).toLocaleString('de', { style: 'percent' });
        labelLosDefault: '( Standard )',
        labelLos105: '( Huh? )',
        labelLos110: '( Wahnsinn! )',
        labelRoomLabelStyle: 'Zimmer Aufkleberart',
        labelNumberFloorsToDisplay: 'Anzahl der Etagen anzuzeigen',
        lockPanning: 'Schloss panning',
        lockZooming: 'Schloss zoom',
        fullScreen: 'Vollbild',
        enableScreenshots: 'Aktivieren Screenshots',
        contributions: 'Beiträge',
        supportSiteNote: 'Eine Möglichkeit zu prüfen, Ihre Unterstützung ist durch eine kleine Spende.',
        donateImg: 'https://www.paypalobjects.com/de_DE/i/btn/btn_donate_LG.gif',
        latestUpdate: 'Feb 2017 aktualisiert'
      },
      roomLabelStyles: {
        Dark: 'Dunkel',
        Light: 'Licht ( Standard )',
        LightAndLarge: 'Groß und Dunkel',
        DarkAndLarge: 'Groß und Licht',
        DarkAndSmall: 'Klein und Dunkel',
        LightAndSmall: 'Klein und Licht',
        DisplayNone: 'Abschalten'
      },
      floorDisplayOptions: {
        one: '1 - Voll',
        two: '2 - Teilt',
        four: '4 - Gitter'
      },
      selectMaps: {
        selectAMap: 'Wählen Sie eine Karte',
        homeLink: 'Wählen Sie eine Karte'
      },
      compass: {
        letterN: 'N',
        letterE: 'O',
        letterS: 'S',
        letterW: 'W'
      },
      floorNames: {
        basement: { full: 'K', short: 'K' },
        firstFloor: { full: 'EG', short: 'EG' },
        secondFloor: { full: '1. OG', short: '1. OG' },
        thirdFloor: { full: '2. OG', short: '2. OG' },
        fourthFloor: { full: '3. OG', short: '3. OG' },
        roof: { full: 'AUSSEN', short: 'AUSSEN' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Bombe',
        hostageShort: 'G',
        hostage: 'Geisel',
        secureShort: 'S',
        secure: 'Bereich sichern',
        showAll: 'Alle Missionsziele'
      },
      legend: {
        breakableWalls: 'Zerstörbare Wände',
        breakableFloorTraps: 'Zerstörbare Falltür',
        ceilingHatches: 'Deckenluke',
        lineOfSightWalls: 'Sichtbereich durch zerstörte Wände',
        lineOfSightFloors: 'Sichtbereich Flur',
        droneTunnels: 'Drohnentunnel',
        objectives: 'Missionsziele',
        insertionPoints: 'Einstiegspunkt',
        securityCameras: 'Überwachungskamera',
        skylights: 'Oberlicht',
        onFloorAboveOrBelow: 'Im Stockwerk darüber/darunter',
        cameraLineOfSight: 'Kamerasichtlinie',
        ladders: 'Leitern'
      },
      mapNames: {
        bank: 'Bank',
        border: 'Grenze',
        bartlett: 'Bartlett U.',
        chalet: 'Chalet',
        club: 'Clubhaus',
        coastline: 'Küste',
        consulate: 'Konsulat',
        hereford: 'Hereford-Basis',
        house: 'Haus',
        kanal: 'Kanal',
        kafe: 'Café Dostojewski',
        oregon: 'Oregon',
        plane: 'Präsidentenflugzeug',
        skyscraper: 'Wolkenkratzer',
        themepark: 'Freizeitpark',
        tower: 'Turm',
        yacht: 'Jacht'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'Parkplatz-Front',
          spawnBackAlley: 'Seiteneingang',
          printerRoom: 'Druckerraum',
          parkingLot: 'Parkplatz-Front',
          boulevard: 'Boulevard',
          jewelryFront: 'Juwelier-Front',
          plaza: 'Platz',
          mainEntrance: 'Haupteingang',
          garageRamp: 'Garagenrampe',
          exteriorParking: 'Außenparkplatz',
          garageRoof: 'Garagendach',
          alleyAccess: 'Seiteneingang',
          backAlleyRooftop: 'Seitengassen-Dach',
          backAlley: 'Seitengasse',
          highRoof: 'Oberes Dach',
          lowRoof: 'Unteres Dach',
          vault: 'Tresorraum',
          goldVault: 'Gold-<br/>tresor',
          serverRoomStairs: 'Server-Raum-Treppe',
          serverRoom: 'Server-Raum',
          CCTVRoom: 'Wach-<br/>raum',
          loadingDock: 'Laderampe',
          secureHallway: 'Sicherer<br/>Gang',
          sewer: 'Tunnel | Kanalisation',
          lockers: 'Schließfächer',
          vaultLobby: 'Tresor-Lobby',
          vaultEntrance: 'Tresor-<br/>Eingang',
          mainStairway: 'Haupttreppe',
          bankGarage: 'Bank-Garage',
          elevators: 'Aufzüge',
          tellersOffice: 'Kassier-<br/>Büro',
          archives: 'Archiv',
          tellers: 'Schalter',
          loanOffice: 'Kredit-Büro',
          officeHallway: 'Büro-Gang',
          skylightStairwell: 'Oberlicht-Treppe',
          lobby: 'Lobby',
          openArea: 'Großraumbüro',
          staffRoom: 'Personalraum',
          electricalRoom: 'Elektrik',
          adminOffice: 'Verw.-Büro',
          ATMs: 'Geldautomaten',
          executiveHallway: 'Direktoren-<br/>Gang',
          frontDesk: 'Empfang',
          executiveLounge: 'Direktoren-<br/>Lounge',
          CEOOffice: 'CEO-<br/>Büro',
          janitorCloset: 'Hausmeisterschrank',
          hallway: 'Flur',
          terrace: 'Terrasse',
          stockTradingRoom: 'Aktienhandels-<br/>raum',
          conferenceRoom: 'Konferenzraum'
        },
        bartlett: {
          archwayHall: 'Bogengang-Halle',
          backAlley: 'Seitengasse',
          bathroom: 'Bade-<br/>zimmer',
          campusField: 'Campusfeld',
          classroom: 'Klassenzimmer',
          coatRoom: 'Garde-<br/>robe',
          compassHallway: 'Kompass-Flur',
          courtyard: 'Hof',
          centralHallway: 'Mittel-<br/>gang',
          diningRoom: 'Esszimmer',
          eastBalcony: 'Ostbalkon<br/>( nicht gezeigt )',
          eastCorridor: 'Ost-<br/>korridor',
          eastStairs: 'Ost-<br/>treppe',
          festival: 'Fest',
          frontEntrance: 'Vordereingang',
          frontOffice: 'Vorderes<br/>Büro',
          frontPatio: 'Vordere Veranda',
          gardenPass: 'Garten-<br/>weg',
          kitchen: 'Küche',
          lobby: 'Lobby',
          lounge: 'Lounge',
          lowerLibrary: 'Untere<br/>Bibliothek',
          mainGate: 'Haupttor',
          mainOffice: 'Hauptbüro',
          modelHall: 'Modellsaal',
          pantry: 'Speisekammer',
          parking: 'Parkplatz',
          pianoRoom: 'Klavierzimmer',
          readingRoom: 'Lesesaal',
          roof: 'Dach',
          rowingMuseum: 'Ruder-<br/>museum',
          serviceRoom: 'Dienst-<br/>raum',
          terrace: 'Terrasse',
          trophyRoom: 'Trophäen-<br/>raum',
          upperLibrary: 'Obere<br/>Bibliothek',
          vistaHallway: 'Offener<br/>Gang',
          westBalcony: 'Westbalkon<br/>( nicht gezeigt )',
          westCorridor: 'West-<br/>korridor'
        },
        border: {
          armoryLockers: 'Waffenlager-schränke',
          tellers: 'Schalter',
          ventilationRoom: 'Lüftungs-<br/>raum',
          exitHallway: 'Gang zum<br/>Ausgang',
          supplyCorridor: 'Vorrats-<br/>korridor',
          detention: 'Arrestzelle',
          customsInspection: 'Zollinspektion',
          customsDesk: 'Zoll schalter',
          centralStairs: 'Mittlere Treppe',
          serverRoom: 'Serverraum',
          supplyRoom: 'Vorrats-<br/>raum',
          workshop: 'Arbeits-<br/>raum',
          mainLobby: 'Haupt-<br/>lobby',
          bathroom: 'Toilette',
          waitingRoom: 'Warte-<br/>raum',
          eastStairs: 'Ost-<br/>treppe',
          passportCheck: 'Passkontrolle',
          archives: 'Archiv',
          offices: 'Büros',
          officesHallway: 'Büro-<br/>gang',
          fountain: 'Wasserbecken',
          mainHallway: 'Haupt-<br/>flur',
          armoryDesk: 'Waffen-<br/>lager',
          securityRoom: 'Sicherheits-<br/>raum',
          breakRoom: 'Pausen-<br/>raum',
          spawnEastVehicleEntrance: 'Östliche Einfahrt',
          spawnValley: 'Schlucht',
          spawnWestVehicleExit: 'Westliche Ausfahrt',
          westTower: 'West-<br/>turm',
          pedestrianExit: 'FuBganger-<br/>ausgang',
          valley: 'Schlucht',
          parkingLotEntrance: 'Fußgänger-<br/>Zollstelle',
          parkingLot: 'Parkplatz',
          westRoad: 'Westliche Straße',
          vehicleCustoms: 'Fahrzeug-Zollstelle',
          crashScene: 'Unfall-stelle',
          eastRoad: 'Östliche Straße',
          pedestrianEntrance: 'Fußgänger-<br/>eingang',
          pedestrianCustoms: 'Fußgänger-<br/>Zollstelle',
          watchTower: 'Wach-<br/>turm',
          eastAlley: 'Östliche Gasse',
          parkingLotAlley: 'Parkplatz-<br/>gasse',
          northBalcony: 'Nord-balkon',
          eastBalcony: 'Ost-<br/>balkon',
          westBalcony: 'West-<br/>balkon',
          southBalcony: 'Süd-balkon',
          roof: 'Dach'
        },
        chalet: {
          spawnFrontYard: 'Vorgarten',
          spawnCampfire: 'Lagerfeuer',
          spawnCliffside: 'Kllippen',
          spawnLakeside: 'See',
          libraryStairs: 'Bibliotheks-<br/>treppe',
          snowmobileGarageCorridor: 'Schneemobil Garage Korridor',
          snowmobileGarage: 'Schneemobil-<br/>Garage',
          greatRoomStairs: 'Treppe<br/>Großer<br/>Raum',
          storageRoom: 'Lager-<br/>raum',
          wineCellar: 'Wein-<br/>keller',
          wineStock: 'Wein-<br/>lager',
          basementHallway: 'Keller-<br/>Gang',
          backyardStairs: 'Garten-<br/>treppe',
          mainStairs: 'Haupt-<br/>treppe',
          mainGarage: 'Hauptgarage',
          garageEntrance: 'Hauptgaragen-<br/>einfahrt',
          westEntrance: 'Westein-<br/>gang',
          gamingRoomHallway: 'Spielzimmer-<br/>flur',
          gamingRoom: 'Spielzimmer',
          bar: 'Bar',
          greatRoom: 'Großer Raum',
          diningRoom: 'Esszimmer',
          mainEntrance: 'Hauptein-<br/>gang',
          trophyRoom: 'Trophäen-raum',
          kitchenHallway: 'Küchen-<br/>flur',
          kitchen: 'Küche',
          libraryHallway: 'Bibliotheksflur',
          libraryEntrance: 'Bibliotheks-<br/>eingang',
          library: 'Bibliothek',
          bedroomTerrace: 'Schlafzimmer-<br/>Terrasse',
          fireplaceHallway: 'Kamin-<br/>flur',
          bedroomHallway: 'Schlafzimmer-<br/>flur',
          masterBathroom: 'Hauptbade-<br/>zimmer',
          masterBedroom: 'Haupt-schlafzimmer',
          office: 'Büro',
          woodenTrail: 'Waldweg',
          campfireWood: 'Wald-Lagerfeuer',
          backyard: 'Garten',
          gazeebo: 'Pavillon',
          cliffsideStairs: 'Klippentreppe',
          cliffsideWoods: 'Klippenwald',
          backyardPatio: 'Gartenterrasse',
          officeBalcony: 'Büro-<br/>balkon',
          helipadTrail: 'Helipad-<br/>Weg',
          helipad: 'Helipad',
          frontYardPatio: 'Vorgarten-<br/>terrasse',
          frontYard: 'Vorgarten',
          bathroomBalcony: 'Badezimmer-<br/>balkon',
          libraryBalcony: 'Bibliotheks-<br/>balkon',
          bedroomBalcony: 'Schlafzimmer-<br/>balkon',
          snowmobiles: 'Schneemobile'
        },
        club: {
          shippingDock: 'Laderampe',
          warehouse: 'Lagerhalle',
          constructionSite: 'Baustelle',
          easternSubroof: 'Östliches<br/>Underdach',
          container: 'Container',
          graffitiArea: 'Graffiti-Bereich',
          recreationArea: 'Erholungsberich',
          junkyard: 'Schrottplatz',
          vipParking: 'VIP-Parkplatz',
          mainGate: 'Haupttor',
          parking: 'Parkplatz',
          kennels: 'Zwinger',
          trash: 'Müll',
          centralSubroof: 'Mittleres<br/>Unterdach',
          easternRoof: 'Östliches<br/>Dach',
          centralRoof: 'Mittleres<br/>Dach',
          westernRoof: 'Westliches Dach',
          balcony: 'Balkon',
          escapeTunnel: 'Fluchtunnel',
          arsenalRoom: 'Arsenal-<br/>Raum',
          basementHallway: 'Keller-Gang',
          memorialRoom: 'Gedenkraum',
          utilityRoom: 'Haustechnik-<br/>Raum',
          oilPit: 'Ölgrube',
          centralStairs: 'Mittlere<br/>Treppe',
          church: 'Clubraum',
          frontPorch: 'Vordere Veranda',
          garage: 'Garage',
          lobby: 'Lobby',
          stockRoom: 'Vorratszimmer',
          garageStorage: 'Garagen-<br/>lager',
          lounge: 'Lounge',
          bar: 'Bar',
          centralHallway: 'Mittelgang',
          kitchen: 'Küche',
          kitchenEntrance: 'Küchen-<br/>eingang',
          westernHallway: 'West-<br/>gang',
          stripClub: 'Strip-Club',
          junkyardEntrance: 'Schrottplatz-<br/>eingang',
          sideEntrance: 'Seiteneingang',
          changingRoom: 'Umkleide',
          bedroom: 'Schlaf-<br/>zimmer',
          bathroom: 'Bade-<br/>zimmer',
          bedroomHallway: 'Schlafzimmer-Gang',
          logisticOffice: 'Logistik-<br/>Büro',
          gym: 'Fitness-<br/>raum',
          secretStash: 'Geheim-<br/>lager',
          cctvRoom: 'Wachraum',
          cashRoom: 'Bargeld-<br/>raum',
          easternStairs: 'Östliche<br/>Treppe'
        },
        coastline: {
          aquarium: 'Aquarium',
          backAlley: 'Seitengasse',
          balcony: 'Balkon<br/>( nicht gezeigt )',
          bathroom: 'Toilette',
          billiardsRoom: 'Billardraum',
          blueBar: 'Blaue Bar',
          cantina: 'Cantina',
          courtyard: 'Hof',
          djBooth: 'DJ-Pult<br/>( nicht gezeigt )',
          garageRoof: 'Garagendach',
          hallOfFame: 'Ruhmeshalle',
          hallway: 'Korridor',
          hookahDeck: 'Shisha-Terrasse<br/>( nicht gezeigt )',
          hookahLounge: 'Shisha-Lounge',
          kitchen: 'Küche',
          mainEntrance: 'Haupt-<br/>eingang',
          mainLobby: 'Haupt-<br/>lobby',
          northStairs: 'Nördliche Treppe',
          office: 'Büro',
          penthouse: 'Penthouse',
          pool: 'Pool',
          poolEntrance: 'Pooleingang',
          poolSide: 'Poolbereich',
          rooftop: 'Dach',
          ruins: 'Ruinen',
          securityRoom: 'Sicherheits-<br/>raum',
          serviceEntrance: 'Service-<br/>Eingang',
          southHallway: 'Südliche Gang',
          southPromenade: 'Südliche Promenade',
          southStairs: 'Südliche<br/>Treppe',
          sunriseBar: 'Sunrise-Bar',
          sunRoom: 'Wintergarten',
          theater: 'Kino',
          terrace: 'Terrasse',
          toilets: 'WC',
          vipLounge: 'VIP-Lounge',
          walkway: 'Gehweg'
        },
        consulate: {
          spawnRiotBarricade: 'Schutzbarrikade',
          spawnPoliceLine: 'Polizeiabsperrung',
          spawnGasStation: 'Tankstelle',
          spawnSideEntrance: 'Seiteneingang',
          exitStairs: 'Treppe<br/>Ausgang',
          garage: 'Garage',
          basementCorridor: 'Keller-korridor',
          securityRoom: 'Sicherheits-<br/>raum',
          cafeteria: 'Cafeteria',
          mainStairs: 'Haupttreppe',
          lockerHallway: 'Spind-<br/>gang',
          serviceStairs: 'Dienstboten-<br/>treppe',
          electricRoom: 'Elektrik',
          storageRoom: 'Lagerraum',
          archives: 'Archiv',
          archivesCorridor: 'Dienstboten-<br/>treppe',
          pressRoom: 'Presseraum',
          westCorridor: 'Westkorridor',
          publicBathroom: 'Öffentliche<br/>Toilette',
          antechamber: 'Vorzimmer',
          lobby: 'Lobby',
          eastCorridor: 'Ost-<br/>korridor',
          tellers: 'Schalter',
          visaOffice: 'Visa-Büro',
          visaEntrance: 'Visa-<br/>Eingang',
          frontDoor: 'Vordertür',
          balcony: 'Balkon',
          copyRoom: 'Kopierraum',
          cabinet: 'Schrank',
          administrationOffice: 'Verwaltungs-<br/>büro',
          breakRoom: 'Pausen-<br/>raum',
          frontOffice: 'Büroempfang',
          meetingRoom: 'Besprechungs-<br/>zimmer',
          hallway: 'Gang',
          consulFrontDesk: 'Konsul<br/>Empfang',
          privateBathroom: 'Privates<br/>Badezimmer',
          waitingRoom: 'Warteraum',
          consulateOffice: 'Konsul-<br/>Büro',
          garageWay: 'Garageneinfahrt',
          courtyard: 'Hof',
          backCourtyard: 'Hinterhof',
          sideEntrance: 'Seiteneingang',
          dumpster: 'Müllcontainer',
          parking: 'Parkplatz',
          gardens: 'Gärten',
          fountain: 'Brunnen',
          emergencyExit: 'Notaus-<br/>gang',
          garageRoof: 'Garagen-<br/>dach',
          memorialGarden: 'Gedächtnisgarten',
          policeLine: 'Polizeiabsperrung',
          eastFrontYard: 'Östilicher Vorhof',
          westFrontYard: 'Westlicher Vorhof',
          frontAlley: 'Front-Einfahrt',
          buildingRoof: 'Gebäudedach'
        },
        favela: {
          packagingRoom: 'Packraum',
          footballApartment: 'Fußball-<br/>Appartment',
          armoryRoom: 'Waffenraum',
          auntsApartment: 'Tantchens<br/>Appartment',
          auntsBedroom: 'Tantchens<br/>Schlafzimmer',
          growRoom: 'Anbau-<br/>raum',
          bikersApartment: 'Biker-<br/>Appartment',
          methLab: 'Meth-Labor',
          footballBedroom: 'Fußball-<br/>Schlafzimmer',
          footballOffice: 'Fußball-<br/>Büro',
          bikersBedroom: 'Biker-<br/>Schlafzimmer',
          backStairs: 'Hintere<br/>Treppe',
          auntsHall: 'Tantchens<br/>Diele',
          kidsRoom: 'Kinderzimmer',
          mainStairs: 'Haupt-<br/>treppe',
          stairHall: 'Treppen-<br/>haus',
          roof: 'Dächer',
          laundryRoom: 'Waschküche',
          vaultRoom: 'Tresor-<br/>raum',
          bikersGarage: 'Biker-<br/>Garage',
          backAlley: 'Seitengasse',
          schoolAlley: 'Schul-Gasse',
          footballPitch: 'Fußballfeld',
          market: 'Markt',
          marketAlley: 'Markt-<br/>Gasse',
          schoolRooftops: 'Schul-<br/>Dächer',
          street: 'Straße',
          rooftops: 'Dächer',
          courtyard: 'Hof',
          accessAlley: 'Zugangsstraße',
          shop: 'Laden<br/>( nicht gezeigt )',
          marketRooftops: 'Markt-Dächer'
        },
        hereford: {
          shootingRange: 'SchieBplatz',
          mainStairs: 'Haupt-<br/>treppe',
          garage: 'Garage',
          kitchen: 'Küche',
          diningRoom: 'Ess-<Br/>zimmer',
          masterBedroom: 'Haupt-<br/>schlafzimmer',
          laundryRoom: 'Wasch-<br/>küche',
          bathroom: 'Toilette',
          workshop: 'Arbeitsraum',
          rooftop: 'Dach'
        },
        house: {
          spawnConstructionSite: 'Baustelle',
          spawnRiverDocks: 'Flussdock',
          spawnAPCArea: 'Panzerwagen-<br/>Bereich',
          spawnSideStreet: 'Seitenstraße',
          depot: 'Depot',
          trainingRoom: 'Fitnessraum',
          kitchenStairs: 'Kücheen-<br/>treppe',
          sideStairs: 'Seiten-<br/>treppe',
          laundryRoom: 'Wasch-<br/>küche',
          garage: 'Garage',
          livingRoom: 'Wohn-<br/>zimmer',
          backEntrance: 'Hintereingang',
          lobby: 'Lobby',
          kitchen: 'Küche',
          office: 'Büro',
          diningRoom: 'Ess-<br/>zimmer',
          workshop: 'Arbeitsraum',
          kidsBedroom: 'Kinder-<br/>schlafzimmer',
          upperHallway: 'Oberer<br/>Gang',
          lobbyStairs: 'Lobby-<br/>Treppe',
          walkIn: 'Begehbarer<br/>Schrank',
          masterBedroom: 'haupt-<br/>schlafzimmer',
          bathroom: 'Badezimmer',
          sideStreet: 'Seiten-<br/>straße',
          garageEntrance: 'Garagen-<br/>eingang',
          garden: 'Garten',
          backAlley: 'Hintergasse',
          patio: 'Terrasse',
          jacuzzi: 'Whirlpool',
          basementStairs: 'Keller-<br/>treppe',
          treehouseAlley: 'Baumhaus-<br/>gasse',
          frontYard: 'Vorgarten',
          frontStreet: 'Vordere Straße',
          frontPorch: 'Vordere Veranda',
          backPorch: 'Hintere Veranda',
          backPorchTop: 'Hintere Veranda oben',
          frontPorchTop: 'Vordere Veranda oben',
          rooftop: 'Dach'
        },
        kafe: {
          riverDocks: 'Fluss-Docks',
          christmasMarket: 'Weihnachtsmarkt',
          park: 'Parkgasse',
          laundryRoom: 'Waschküche',
          bakery: 'Bäckerei',
          diningRoom: 'Esszimmer',
          museumEntrance: 'Museums-<br/>eingang',
          miningRoom: 'Bergbauraum',
          trainMuseum: 'Bahnmuseum',
          mainCorridor: 'Haupt-<br/>korridor',
          readingRoomCorridor: 'Lesezimmer-korridor',
          readingRoom: 'Lesezimmer',
          fireplaceHall: 'Kaminsaal',
          cigarShop: 'Zigarrenladen',
          cigarLounge: 'Zigarren-Lounge',
          bar: 'Bar',
          barBackstore: 'Bar-<br/>Lager',
          washrooms: 'Toilette',
          cocktailLounge: 'Cocktail-<br/>Lounge',
          cocktailLoungeEntrance: 'Cocktail-<br/>Lounge-<br/>Eingang',
          westMainStreet: 'Westliche Hauptstraße',
          mainStreet: 'Hauptstraße',
          eastMainStreet: 'Östliche Hauptstraße',
          bakeryParking: 'Bäckerei-<br/>Parkplatz',
          bakeryRoof: 'Bäckereidach',
          cafeRoofTop: 'Café-Dach',
          terrace: 'Terrasse',
          backAlley: 'Seitengasse',
          garage: 'Garage'
        },
        kanal: {
          floatingDock: 'Schwimm-Dock',
          sailboats: 'Segelboote',
          constructionSite: 'Baustelle',
          pipes: 'Undichte Rohre',
          lockerRoom: 'Umkleideraum',
          archives: 'Archiv',
          lounge: 'Lounge',
          modelRoom: 'Modellraum',
          securityRoom: 'Sicherheits-<br/>raum',
          projectorRoom: 'Projektorraum',
          kitchen: 'Küche',
          controlRoom: 'Kontrollraum',
          controlRoomHallway: 'Kontrollraum-Gang',
          serverRoom: 'Server-<br/>Raum',
          lockGate: 'Schleusentor',
          quayContainers: 'Kai-Container',
          lockGateTunnel: 'Schleusentor-<br/>Tunnel',
          constructionEntrance: 'Baustellen-<br/>eingang',
          parkingAlley: 'Parkplatzgasse',
          parkingEntrance: 'Parkplatz-<br/>einfahrt',
          middleRoad: 'Mittlere<br/>Straße',
          forkliftAlley: 'Gabelstapler-<br/>Gasse',
          frontLawn: 'Vorgarten',
          coastGuardRoof: 'Küstenwache-<br/>Dache',
          balcony: 'Balkon',
          parking: 'Parkplatz'
        },
        oregon: {
          spawnJunkyard: 'Schrottplatz',
          spawnStreet: 'StraBe',
          spawnConstructionSite: 'Baustelle',
          towerStairs: 'Turm-<br/>treppe',
          boilerRoom: 'Boiler-<br/>Raum',
          electricRoom: 'Elektrik',
          bunkerEntrance: 'Bunker-<br/>eingang',
          bunker: 'Bunker',
          basementCorridor: 'Keller-<br/>korridor',
          supplyRoom: 'Nachschub-<br/>raum',
          laundryRoom: 'Waschküche',
          laundryStorage: 'Waschküchen-<br/>lager',
          laundryStairs: 'Waschküchen-<br/>treppe',
          office: 'Büro',
          diningHall: 'Speisesaal',
          diningHallCorridor: 'Speisesaal-korridor',
          showers: 'Duschen',
          kitchen: 'Küche',
          bathroom: 'Toilette',
          dormStairs: 'Schlafsaaltreppe',
          pantry: 'Speisekammer',
          bathroomCorridor: 'Toiletten-korridor',
          classroom: 'Klassen-<br/>zimmer',
          lobby: 'Lobby',
          mainStairs: 'Haupt-<br/>treppe',
          meetingHall: 'Versammlungs-<br/>halle',
          rearStage: 'Hinterbühne',
          garage: 'Garage',
          officeStorage: 'Büro<br/>-Lagerraum',
          kidsDorm: 'Kinder-<br/>Schlafsäle',
          dormMainHall: 'Schlafsaal<br/>Haupthalle',
          smallDorms: 'Kleine Schlafsäle',
          armoryCorridor: 'Waffenlager-<br/>korridor',
          masterBedroom: 'Haupt<br/>-schlafzimmer',
          armory: 'Waffenlager',
          walkIn: 'Begehbarer<br/>Schrank',
          attic: 'Dachboden',
          watchTower: 'Watchturm',
          busYard: 'Busdepot',
          junkyard: 'Schrottplatz',
          farmlands: 'Ackerland',
          shootingRange: 'Schießplatz',
          constructionSite: 'Baustelle',
          parking: 'Parkplatz',
          mainEntrance: 'Haupteingang',
          street: 'Straße',
          balcony: 'Balkon',
          diningHallRoof: 'Speisesaal-<br/>dach',
          officeRoof: 'Bürodach',
          meetingHallEntrance: 'Versammlungs-<br/>hallen-Eingang',
          garageRoof: 'Garagendach',
          dormsRoof: 'Schlafsaaldach',
          meetingHallRoof: 'Versammlungs-<br/>hallendach',
          supplyCloset: 'Vorrats-<br/>raum'
        },
        plane: {
          spawnOfficialEntrance: 'Haupteingang',
          spawnReporterEntrance: 'Reporter-Eingang',
          spawnServiceEntrance: 'Vorderer Service-Eingang',
          pressBathroom: 'Presse-<br/>Toilette',
          meetingRoom: 'Besprechungs-<br/>zimmer',
          frontHallway: 'Vorderer<br/>Gang',
          executiveOffice: 'VIP-<br/>Büro',
          mainEntrance: 'Haupteingang',
          frontStairs: 'Vordere Treppe',
          pantry: 'Speisekammer',
          kitchen: 'Küche',
          executiveHallway: 'VIP-Gang',
          executiveBedroom: 'VIP-<br/>Schlafzimmer',
          changeRoom: 'Umkleide',
          laund: 'Waschküche.',
          frontServiceEntrance: 'Vorderer Service-Eingang',
          rightWing: 'Rechter Flügel',
          backServiceEntrance: 'Hinterer<br/>Service-Eingang',
          reporterEntrance: 'Reporter-<br/>Eingang',
          leftWing: 'Linker Flügel',
          staffSection: 'Personalbereich',
          securityRoom: 'Sicherheits-<br/>raum',
          pressSectionA: 'Pressebereich<br/>A',
          pressSectionB: 'Pressebereich<br/>B',
          backStairs: 'Hintere Treppe',
          cargoHold: 'Frachtraum',
          serviceCorridor: 'Dienstkorridor',
          storage: 'Lager',
          luggageHold: 'Gepäckraum',
          firstAidStation: 'Erste-Hilfe-Station',
          cargoFrontEntrance: 'Vorderer<br/>Frachteingang',
          cockpitStairs: 'Cockpit-Treppe',
          cabinStaff: 'Kabinen-<br/>personal',
          radioCabin: 'Funkkabine',
          cabin: 'Cockpit',
          caterer: 'Caterer',
          serverRoomA: 'Server-Raum A',
          serverRoomB: 'Server-Raum B',
          technicalSeating: 'Technikersitz',
          ladderRoom: 'Leiter-<br/>raum'
        },
        skyscraper: {
          helipad: 'Helipad',
          tower: 'Turm',
          ventilationUnits: 'Lüftungseinheiten',
          kitchen: 'Küche',
          pantry: 'Speisekammer',
          deliveryRoom: 'Annahmeraum',
          houseLobby: 'Lobby',
          houseEntrance: 'Haus-<br/>eingang',
          mainEntrance: 'Haupt-<br/>eingang',
          reception: 'Empfang',
          bedroom: 'Schlafzimmer',
          closet: 'Schrank',
          bathroom: 'Toilette',
          houseStairs: 'Haus-<br/>treppe',
          restaurant: 'Restaurant',
          toilet: 'WC',//  ß  ä  Ä  é  ö  Ö  ü  Ü
          bbq: 'Barbecue',
          backHallway: 'Hinterer Flur',
          mainStairs: 'Haupt-<br/>treppe',
          geishaRoom: 'Geisha-<br/>Zimmer',
          hallway: 'Flur',
          karaoke: 'Karaoke',
          teaRoom: 'Teezimmer',
          taiko: 'Taiko',
          terrace: 'Terrasse',
          backStairs: 'Hintere<br/>Treppe',
          houseBalcony: 'Haus-<br/>balkon',
          exhibition: 'Ausstellung',
          lounge: 'Lounge',
          workOffice: 'Büro',//  ß  ä  Ä  é  ö  Ö  ü  Ü
          clearance: 'VIP-Bereich',
          peacefullTree: 'Friedensbaum',
          contemplationGarden: 'Meditations-<br/>garten',
          westGarden: 'Westlicher<br/>Garten',
          bridge: 'Brücke',
          gazeebo: 'Pavillon',
          restBalcony: 'Restaurant-.<br/>balkon',
          northGarden: 'Nördlicher<br/>Garten',
          eastGarden: 'Östlicher<br/>Garten',
          sandGarden: 'Sandgarten',
          sidePath: 'Seiten-<br/>pfad',
          sideStairs: 'Seiten-<br/>treppe',
          dragonStatue: 'Drachen-<br/>statue',
          coveredWalkway: 'Überdachter<br/>Weg'
        },
        themepark: {
          arcadeEntrance: 'Spielhallen<br/>eingang',
          arcadeStairs: 'Spielhallentreppe',
          arcadeToilet: 'Spielhallen-<br/>WC',
          barrelRoom: 'Fasslager',
          backAlley: 'Seitengasse',
          bumperCars: 'Autoscooter',
          bunk: 'Schlafbereich',
          cafe: 'Café',
          cafeCorridor: 'Café-Korridor',
          cafeTerrace: 'Café-<br/>Terrasse',
          cashStash: 'Bargeldlager',
          controlRoom: 'Kontroll<br/>raum',
          dayCare: 'Kindertagesstätte',
          guestInfo: 'Gästeinformation',
          initiationRoom: 'Initiations<br/>raum',
          jointCorridor: 'Verbindrungs<br/>korridor',
          lockerRoom: 'Umlkeide<br/>raum',
          mainEntrance: 'Haupteingang',
          office: 'Büro',
          palms: 'Palmen',
          roboCircuit: 'Robo-Arena',
          sweetShop: 'Süßigkeitenladen',
          teacups: 'Teetassen',
          upperArcade: 'Obere<br/>Spielhalle',
          village: 'Dorf'
        },
        tower: {
          northRoof: 'Norddach',
          northRoofNotShown: 'Norddach<br/>(nicht gezeigt)',
          southRoof: 'Süddach',
          southRoofNotShown: 'Norddach<br/>(nicht gezeigt)',
          roofAccess: 'Dachzugang',
          northRappel: 'Nord-<br/>Abseilpunkt',
          southRappel: 'Süd-<br/>Abseilpunkt',
          mezzanine: 'Zwisch',
          ventilation: 'Lüftungengeschoss',
          centerAtrium: 'Atrium<br/>Mitte',
          infoBooth: 'Infostand',
          eastAtrium: 'Ostatrium',
          westAtrium: 'Westatrium',
          eastBalcony: 'Ostbalkon',
          westBalcony: 'Westbalkon',
          galleryMain: 'Hauptgalerie',
          mediaCenter: 'Mediecenter',
          galleryAnnex: 'Galerieanbau',
          giftShop: 'Geschenke-<br/>Shop',
          exhibitRoom: 'Ausstellungs<br/>raum',
          lanternRoom: 'Laternen<br/>raum',
          elevator: 'Aufzug',
          officesHallway: 'Büroflur',
          exhibitHallway: 'Ausstellungs<br/>korridor',
          offices: 'Büros',
          companyReception: 'Firmen<br/>empfang',
          supplyRoom: 'Vorratsraum',
          meetingRoom: 'Besprechungs<br/>zimmer',
          ceoOffice: 'Geschäftsfürer<br/>büro',
          bathroom: 'WC',
          serverRoom: 'Sever-Raum',
          northStairs: 'Nordtreppe',
          westStairs: 'Westt<br/>reppe',
          eastStairs: 'Ost<br/>treppe',
          mainReception: 'Haupt<br/>empfang',
          centerHallway: 'Mittlerer<br/>Flur',
          teaRoom: 'Teezimmer',
          lounge: 'Lounge',
          bar: 'Bar',
          kitchen: 'Küche',
          restaurant: 'Restaurant',
          birdRoom: 'Vogel<br/>zimmer',
          restaurantReception: 'Restaurant<br/>empfang',
          restaurantHallway: 'Restaurantkorridor',
          barHallway: 'Barkorridor',
          westObservatory: 'West-<br/>Observatorium',
          bonsaiRoom: 'Bonsai<br/>zimmer',
          traditionalHall: 'Traditioneller Saal'
        },
        yacht: {
          spawnSubmarine: 'U-Boot',
          spawnZodiak: 'ZodiSchlauchbootak',
          spawnSnowMobile: 'Schneemobile',
          mapsRoom: 'Kartenraum',
          cockpit: 'Cockpit',
          cockpitHallway: 'Cockpit Flur',
          captainsOffice: 'Käpitans-\'s<br/>büro',
          cockpitBalcony: 'Cockpit-<br/>Balkon',
          topDeckStairs: 'Oberdeck-<br/>Treppe',
          helipadEntrance: 'Helipad-<br/>Eingang',
          helipad: 'Helipad-',
          spaDeck: 'Pool-<br/>Deck',
          eastDeck: 'Östliches Deck',
          westDeck: 'Westliches Deck',
          frontDeck: 'Front-<br/>deck',
          masterBedroom: 'Haupt-<br/>schlafzimmer',
          casino: 'Casino',
          pokerRoom: 'Poker-<br/>raum',
          bathroom: 'Bade-<br/>zimmer',
          bedroomHallway: 'Schlafzimmer Flur',
          casinoHallway: 'Casino-Flur',
          globeHallway: 'Globus-<br/>flur',
          lounge: 'Lounge',
          cafeteria: 'Cafeteria',
          engine: 'Motor',
          backEntrance: 'Motor<br/>Hintereingang',
          rearDeck: 'Achter-<br/>deck',
          serverRoom: 'Server-<Br/>Raum',
          engineStorage: 'Motor-<br/>Legerraum',
          engineControl: 'Motor-<br/>steuerung',
          backStairs: 'Hintere<br/>Treppe',
          emergencyExit: 'Notausgang',
          engineHallway: 'Maschinen-korridor',
          frontStairs: 'Vordere<br/>Treppe',
          kitchen: 'Küche',
          staffDormitory: 'Personal-<br/>schlafraum',
          westBalcony: 'Westbalkon',
          eastBalcony: 'Ostbalkon',
          kitchenHallway: 'Küchen-flur',
          kitchenStairs: 'Küchen Treppe',
          kitchenPantry: 'Küchen-<br/>Speisekammer',
          infirmary: 'Krankenstation',
          borealSubRoom: 'Aklark<br/>U-Boot-Raum',
          cafeteriaHallway: 'Cafeteria Flur',
          engineUtility: 'Motor<br/>technik',
          submarine: 'U-Boot',
          westGlacier: 'Westlicher Gletscher',
          eastHullBreach: 'Östliches<br/>Leck',
          eastGlacier: 'Östliches Gletscher',
          frozenRiver: 'Gefrorener Fluss',
          zodiac: 'Schlauchboot',
          westHullBreach: 'Westliches Leck',
          kingOfTheWorld: 'König der<br/>Weit',
          roof: 'Dach',
          anchorName: 'Anker',
          aklarkSubEntrance: 'Aklark<br/>U-Boot-Eingang'
        }
        //  ß  ä  Ä  é  ö  Ö  ü  Ü
      }
    };

  R6MLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MLangTerms);
