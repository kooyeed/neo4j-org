exports.pages = {
    learn : {
        path : "/learn",
        title : "Learn",
        introText : "From graph concepts to deploying a globe spanning cluster, the path to success starts here.",
        featured : null,
        related : ["graph_concepts", "intro", "tracks", "production"]
    },
    develop : {
        path : "/develop",
        title : "Develop",
        introText : "Learn how to develop applications with Neo4j and deploy Server instances.",
        featured : null,
        related : ["get_started", "drivers", "tools", "cloud", "ops"]
    },
    participate : {
        path : "/participate",
        title : "Participate",
        introText : "Connect with a friendly, engaging, and ever expanding community online or in person.",
        featured : null,
        related : ["people", "events", "q_and_a"]
    },
    graph_concepts : {
        path : "/learn/concepts",
        title : "Graph Concepts",
        introText : null,
        featured : {
            title : "Graph DB 101",
            type : "video",
            thumbnail : "/assets/img/still/graphdb-intro.png",
            introText : "A pleasant stroll through general concepts, and Neo4j particulars.",
            src : "http://player.vimeo.com/video/46886385"
        },
        actionText : "Learn more &raquo;",
        related : [ "graphdatabase", "nosql" ]
    },
    intro : {
        path : "/learn/intro",
        title : "Neo4j Introduction",
        introText : "(TBD) These introductory resources help you get started.",
        featured : {
            title : "Why Graphs",
            type : "video",
            thumbnail : "/assets/img/still/emil-explains.jpg",
            introText : "Emil Eifrem explains the secret behind websites like Twitter, Yelp and Facebook.",
            src : "http://player.vimeo.com/video/56040747"
        },
        related : [ "neo4j", "cypher" ]
    },
    tracks : {
        path : "/learn/tracks",
        title : "Tracks",
        introText : "(TODO) Follow a track to learn more about Neo4j.",
        featured : {
            title : "Tracks",
            type : "article",
            thumbnail : "",
            introText : "The following tracks are available: (TODO)",
            src : "http://player.vimeo.com/video/56040747"
        },
        actionText : "Choose your track &raquo;",
        related : ["neo4j", "cypher"]
    },
    production : {
        path : "/learn/production",
        title : "Going into Production",
        introText : "(TBD) Intro text for production",
        featured : {
            title : "Production Secrets",
            type : "video",
            thumbnail : "/assets/img/still/secrets.png",
            introText : "Maybe a day or two before you get featured on Techcrunch, make sure your application is fully production-ready.",
            src : "http://player.vimeo.com/video/49485027"
        },
        actionText : "Get the secrets &raquo;",
        related : ["licensing", "partners"]
    },
    licensing : {
        path : "/learn/licensing",
        title : "Commercial Licensing",
        introText : "Neo4's enterprise editions are provided by Neo Technology for use in commercial, non open-source deployments.",
        actionText : "Read more &raquo;",
        featured : {
            title : "Pragmatic licensing guide",
            introText : "Understand which license you need and how Neo Technology can help you.",
            type : "article",
            content : "<p>Neo4j is commercial software. Proven in production since 2003, powering applications from global collaborative websites to in-house experiments, Neo4j is used in diverse environments.</p>\
<p><a href='http://neotechnology.com'>Neo Technology</a> makes Neo4j available under a dual-license arrangement that is business friendly and open-source transparent: the Neo Technology Commercial License (NTCL), or the (A)GPLv3. Neo Technology also takes care of Neo4j customer support, (OEM) license agreements, the Partner Network, and more.</p>\
<p>There are 3 editions of Neo4j:</p>\
<ul>\
<li><b>Neo4j Community</b>, a High Performance, fully ACID transactional graph database\
<li><b>Neo4j Advanced</b> includes Advanced Monitoring\
<li><b>Neo4j Enterprise</b> includes Online Backup, High Availability Clustering, and Advanced Monitoring\
</ul>\
<p>Commercial Licenses include the permission to integrate the enterprise editions in closed-source software products, service and support by Neo Technology.</p>"
        },
        related : []
    },
    partners : {
        path : "/learn/partners",
        title : "Partner Graph",
        //path : "http://www.neotechnology.com/partners/",
        introText : "Neo Technology works with a large, worldwide partner network which provide local consulting and training services.",
        actionText : "Read more &raquo;",
        featured : {
            title : "Neo4j Partners Graph",
            introText : "The Neo4j Partner Graph provides market differentiation and sustainable revenue opportunities for its members.",
            type : "article",
            content : "Program Benefits\
            <ul>\
<li>Access to Neo4j, the world’s leading graph database and its global community of experts\
<li>Effective field engagement with access to Neo engineering resources\
<li>Access to partner program resources to help develop and expand business\
Sales, training, and marketing enablement to expand existing and drive new partner business and revenue\
<li>Recognition as an innovator and thought leader in the NoSQL space\
</ul>"
        },
        related : []
    },
    graphdatabase : {
        path : "/learn/graphdatabase",
        title : "Property Graph",
        introText : "Neo4j stores data in a Property Graph: nodes + relationships, with properties on both. Leave the schema behind and start focusing on how your data is connected.",
        featured: null,
        actionText : "Learn more &raquo;",
        related : []
    },
    nosql : {
        path : "/learn/nosql",
        title : "NoSQL",
        introText : "You know relational, now consider relationships. Relate the graph model to relational, documents, and other NoSQL stores.",
        featured : null,
        actionText : "Not only SQL &raquo;",
        related: null
    },
    get_started : {
        path : "/learn/get_started",
        title : "Get started with Neo4j",
        introText : "(TODO) Intro text for get started with Neo4j",
        featured : {
            title : "Installing Neo4j",
            type : "video",
            thumbnail : "/assets/img/still/install.gif",
            introText : "Peter Neubauer guides through the first steps of downloading and running Neo4j.",
            src : "http://player.vimeo.com/video/53838744"
        },
        related : ["intro", "drivers"] 
    },
    drivers : {
        path : "/develop/drivers",
        title : "Language Drivers",
        introText : "Friends of Neo4j speak many languages, and work in many frameworks.",
        thumbnail : "/assets/img/still/neo4j_drivers.png",
        featured : null,
        related : ["neo4j_rest","spring_data_neo4j","neo4j_java","neo4j_rb","neography","neo4jphp", "neo4jclient", "py2neo", "neo4j_python", "node_neo4j", "neocons", "bulbflow", "keymaker", "neoid", "neo4django","neo4j_rest_client", "neo4p", "scala","grails","anorm_cypher", "haskell", "datanucleus","neo4j_go"]
    },
    tools : {
        path : "/develop/tools",
        title : "Tools and Resources",
        introText : "(TBD) Intro Text for tools and resources page",
        featured : {
            title : "Query with Cypher",
            type : "video",
            thumbnail : "/assets/img/still/cypher.png",
            introText : "Cypher is a graph query language. Easy on the eyes, while expressive and powerful.",
            src : "http://player.vimeo.com/video/50389825"
        },
        related : ["try", "visualize", "apps"]
    },
    cloud : {
        path : "/develop/cloud",
        title : "Neo4j in the Cloud",
        introText : "(TBD) Intro Text for Neo4j in the Cloud",
        actionText : "Neo4j in the Cloud &raquo;",
        featured : {
            title : "James Ward on Neo4j",
            type : "video",
            thumbnail : "/assets/img/still/jamesward.jpg",
            introText : "James Ward shows how to build and deploy a Neo4j based app on heroku.",
            src : "http://player.vimeo.com/video/53221343"
        },
        related : ["heroku"]
    },
    heroku : {
        path : "/develop/heroku",
        title : "Neo4j Heroku Add-on",
        introText : "NA managed graph database in the cloud, perfect for getting to know Neo4j.",
        actionText : "Do it now &raquo;",
        featured : {
            type : "article",
            title : "Neo4j on Heroku",
            introText : "Neo4j on Heroku",
            content : "<p>As a platform-as-a-service (PAAS) provider, Heroku offers a quick way from your locally developed app to a managed deployment in the cloud.</p>\
            <p>The ability of adding different hosted services is crucial for the daily needs of a modern day web-application.</p>\
            <p>To run a Neo4j graph powered app on Heroku you can easily add the Neo4j Add-on.</p>"
        },
        related : ["heroku_screencast"]
    },
    heroku_screencast : {
        path : "/develop/heroku/screencast",
        title : "Screencast: Integrate Neo4j, Heroku and Google Docs",
        actionText : "Watch this screencast  &raquo;",
        featured : {
            type : "video",
            title : "Screencast: Integrate Neo4j, Heroku and Google Docs",
            introText : "A screencast about deploying an application using the Neo4j add-on on Heroku to expose a readonly Cypher endpoint. Then integrating with a Google Spreadsheet for querying and rendering of the results. For step by step instructions, code and sample data see here: http://blog.neo4j.org/2011/12/neo4j-labs-heroku-neo4j-and-google.html",
            thumbnail : "http://vidcaster-media.s3.amazonaws.com/sites/145/videos/67656/freeze/thumbs/120x6816U7J.jpg",
            src : "http://video.neo4j.org/player/U4Yq"
        },
        related : []
    },
    sdn : {
        path : "/spring",
        title : "Spring Data Neo4j",
        introText : "The best NOSQL database for Spring.",
        actionText : "Go ahead",
        featured : {
            title : "Good Relationships",
            type : "video",
            thumbnail : "/assets/img/still/sdn-intro.png",
            introText : "Michael Hunger introduces <a target='_blank' href='http://www.infoq.com/minibooks/good-relationships-spring-data'>Good Relationships</a>, the SDN book.",
            src : "http://www.youtube.com/embed/heC-8Pq2exQ"
        },
        related : ["good-relationships-spring-data", "getting-started-spring"]
    },
    people : {
        path : "/participate/people",
        title : "People around Neo4j",
        introText : "See who drives Neo4j",
        featured : {
            title : "We need you",
            type : "video",
            thumbnail : "http://photos3.meetupstatic.com/photos/event/8/3/a/6/600_149253702.jpeg",
            introText : "(TODO) we need an introductory video about why people matter to Neo4j",
            src : "http://player.vimeo.com/video/53838744"
        },
        related : ["contributors", "neo_staff", "speakers", "authors"]
    },
    events : {
        path : "/events",
        title : "Events",
        introText : "(TODO) Intro text for events page",
        featured : null,
        related : ["meetups", "conferences", "webinars"]
    },
    meetups : {
        path : "/participate/events/meetups",
        title : "Meetups around the world",
        introText : "",
        actionText : "Find a meetup &raquo;",
        featured : {
            type : "article",
            title : "",
            introText : "(TODO) Introtext meetups",
            content : "TODO: Content for meetup page"
        },
        related : ["events", "webinars", "conferences"]
    },
    webinars : {
        path : "/participate/events/webinars",
        title : "Meetups around the world",
        introText : "",
        actionText : "Find a webinar &raquo;",
        featured : {
            type : "article",
            title : "",
            introText : "(TODO) Introtext webinars",
            content : "TODO: Content for webinars page"
        },
        related : ["events", "meetups", "conferences"]
    },
    conferences : {
        path : "/participate/events/conferences",
        title : "Neo4j at conferences",
        introText : "(TODO) intro text neo4j conferences",
        actionText : "Find a webinar &raquo;",
        featured : {
            type : "article",
            title : "GraphConnect 2012",
            introText : "(TODO) Introtext GraphConnect 2012",
            content : "TODO: Content for GraphConnect page"
        },
        related : ["events", "meetups", "webinars"]

    },
    q_and_a : {
        path : "/participate/q_and_a",
        title : "Ask Questions and Share Answers",
        introText : "(TODO) intro text for this page",
        featured : null,
        related : [
            {
                title : "Stack Overflow",
                path : "http://stackoverflow.com/questions/tagged/neo4j",
                introText : "Find answers or reach to fellow developers with questions.",
                actionText : "Ask Neo4j questions &raquo;"
            },
        ]
    },
    neo4j : {
        path : "/learn/neo4j",
        title : "What is Neo4j?",
        introText : "Our versioned online manual start with a comprehensive tutorial section, complemented with detailed a reference and live interaction.",
        actionText : "Study this &raquo;",
        featured : {
            title : "What is Neo4j?",
            type : "article",
            introText : "Neo4j is a graph database, reliable and fast for managing and querying highly connected data.",

        },
        related : []
    },
    cypher : {
        path : "/learn/cypher",
        title : "Cypher Tutorial",
        introText : "Hands on introduction to the Cypher Query Language",
        actionText : "Learn it &raquo;",
        featured : {
            title : ""
        },
        related : []
    },
    ops : {
        path : "/develop/ops",
        title : "Operations",
        introText : "(TBD) How to run Neo4j",
        actionText : null,
        featured : {
            title : "High Availability",
            type : "video",
            thumbnail : "/assets/img/still/ha_video.gif",
            introText : "See how to setup a 3-member cluster for the <strong>new Neo4j HA 1.5</strong> running on a single machine.",
            src : "http://player.vimeo.com/video/51906007"
        },
        related : []
    },
    try : {
        path : "/learn/try",
        title : "Try",
        introText : "Try Cypher live on a dataset of your choice",
        actionText : "Try live &raquo;",
        featured : {
            title : "Cypher Console",
            type : "_cypher",
            content : ""
        },
        related : [
            {
                title : "Cypher Reference",
                path : "http://docs.neo4j.org/chunked/milestone/cypher-query-lang.html",
                introText : "Cypher is a declarative graph query language that allows for expressive and efficient querying and updating of the graph store without having to write traversals through the graph structure in code.",
                actionText : "Cypher Manual &raquo;"
            },
            {
                title : "Cypher Cheat Sheet (PDF)",
                path : "/resources/cypher",
                introText : "Download the Cypher Cheat Sheet as PDF",
                actionText : "Download PDF &raquo;"
            },
            "cypher"
        ]
    },
    visualize : {
        path : "/develop/visualize",
        title : "Graph Visualization",
        introText : "Storing a graph is one thing, but visualizing it creates awe and epiphanies",
        featured : {
            type : "article",
            title : "Neo4j Server Web Interface",
            introText : "",
            content : "TODO: Add content"
        },
        related : [
        ]
    },
    apps : {
        path : "/learn/apps",
        title : "Apps Gallery",
        introText : "Built with Neo4j, tripping the graph fantastic.",
        featured : null,
        related : []
    }
/*
        ]
            {
                title : "POJO to Graph",
                path : "/develop/spring",
                introText : "Simply annotate your Java classes, configure your Spring application, then enjoy the power of object graph mapping.",
                actionText : "Go ahead &raquo;"
            },
            {
                title : "Example App",
                path : "http://blog.neo4j.org/2012/10/using-spring-data-neo4j-for-hubway-data.html",
                introText : "Use Spring Data Neo4j to model and import the <a target='_blank' href='http://hubwaydatachallenge.org/trip-history-data/''>Hubway Challenge</a> dataset, for advanced querying and visualization.",
                actionText : "Follow along &raquo;"
            }
        ]
            {
                title : "High Availability",
                path : "http://docs.neo4j.org/chunked/stable/ha-how.html",
                introText : "Master-slave replication in a cluster provides your application with read-scaling and fault tolerance.",
                actionText : "Read more &raquo;"
            },
            {
                title : "Backups",
                path : "http://docs.neo4j.org/chunked/stable/operations-backup.html",
                introText : "A fundamental operation for any application: back up early, back up often.",
                actionText : "Read more &raquo;"
            },
            {
                title : "Hardware Sizing",
                path : "",
                introText : "<img class='thumbnail' src='/assets/img/still/hardware-sizing.png' alt='Click to View' data-src='http://player.vimeo.com/video/46049647'><br><i class='icon icon-facetime-video'></i>  Roll up your sleeves and pop the hood, let&#39;s tune this engine.",
                actionText : ""
            }
        ]
        ]

*/

}