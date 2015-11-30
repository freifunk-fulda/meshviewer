define({
  "dataPath": "https://meshviewer.fulda.freifunk.net/data/",
  "siteName": "Freifunk Fulda",
  "mapSigmaScale": 1,
  "showContact": false,
  "maxAge": 2,
  "mapLayers": [
    {
      "name": "Karte (Humanitarian)",
      "provider": "OpenStreetMap.HOT",
      "config": {
        "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>. Tiles courtesy of <a href=\"http://hot.openstreetmap.org\" target=\"_blank\">Humanitarian OpenStreetMap Team</a>",
        "maxZoom": 20
      }
    },
    {
      "name": "Karte (OSM Mapnik)",
      "provider": "OpenStreetMap",
      "config": {
        "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>. ♥ <a href=\"http://donate.openstreetmap.org\" class=\"donate-attr\">Make a Donation</a>",
      }
    },
    {
      "name": "Karte (MapQuest Open)",
      "provider": "MapQuestOpen",
      "config": {
        "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>. Tiles courtesy of <a href=\"http://www.mapquest.com/\" target=\"_blank\">MapQuest</a> <img src=\"https://developer.mapquest.com/content/osm/mq_logo.png\">",
        "maxZoom": 19
      }
    },
    {
      "name": "Satelit (Bing)",
      "provider": "Bing",
      "config": {
        "key": "<Your key>",
        "type": "AerialWithLabels",
        "maxZoom": 20
      }
    },
    {
      "name": "Einfarbige Karte (CartoDB)",
      "provider": "CartoDB",
      "config": {
        "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>. &copy; <a href=\"http://cartodb.com/attributions\">CartoDB</a>"
      }
    },
    {
      "name": "Einfarbige Karte (Stamen Toner Lines)",
      "provider": "Stamen.TonerLite"
    }
  ],
    "nodeInfos": [
    { "name": "Knotenstatistik",
      "href": "https://meshviewer.fulda.freifunk.net/data/dnodes/{NODE_ID}.png",
      "thumbnail": "https://meshviewer.fulda.freifunk.net/data/nodes/{NODE_ID}.png",
      "caption": "Knoten {NODE_ID}"
    }
  ],
  "globalInfos": [
    { "name": "Wochenstatistik",
      "href": "https://meshviewer.fulda.freifunk.net/data/data/globalGraph.png",
      "thumbnail": "https://meshviewer.fulda.freifunk.net/data/nodes/globalGraph.png",
      "caption": "Bild mit Wochenstatistik"
    }
  ]

})
