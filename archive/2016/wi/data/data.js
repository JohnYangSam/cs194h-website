// The sole purpose of this file is to hold the data that changes from year to year. Modify the JS objects below as necessary so that Handlebars can render them properly.

var projects = [
    {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/buckets/",
      "title": "Buckets",
      "tagline": "Dream Together. Do Together.",
      "students": ["Rohit T", "Catherine M", "Andrew F", "Raymond L"],
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/clickED/",
      "title": "clickED",
      "tagline": "See the Questions Behind Their Masks",
      "students": ["Gordon D", "Jake M", "Krister J", "Tyler S"]
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/choreoLab/",
      "title": "choreoLab",
      "tagline": "Creative Conversations in Dance",
      "students": ["Lloyd L", "Raymond C", "Sharleen T", "Rob R"],
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/connect/",
      "title": "Connect",
      "tagline": "Making Dreams Accessible",
      "students": ["Sage I", "Andrew M", "Vicki L", "Betsy A"]
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/meet/",
      "title": "meet",
      "tagline": "Meetings with purpose",
      "students": ["Derin D", "Dartis W", "Peter W", "Lorena L"],
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/nightOwl/",
      "title": "NightOwl",
      "tagline": "Connect with classmates. Collaborate on work.",
      "students": ["Zara S", "Griffin D", "Lachlan G", "Priyanka R", "Evan N"] 
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/pause/",
      "title": "Pause",
      "tagline": "Encouraging the practice of self-care in a fast-paced world.",
      "students": ["Sukhi G", "Julie N", "Raymond L", "Kyle Q"],
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/petflix+chill/",
      "title": "Petflix and Chill",
      "tagline": "Make meaningful connections through bonding over dogs",
      "students": ["Austin C", "Scott B", "Ken C", "Hailey S"]
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/pickPlay/",
      "title": "Jukebox",
      "tagline": "Bringing the jukebox to the modern age.",
      "students": ["Kyle D", "Dersu A", "Dominique Y", "Justin S"],
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/spark/",
      "title": "Spark",
      "tagline": "Helping Teachers Help Students",
      "students": ["Bronson D", "Lucas T", "Nathan E", "Kevin K"]
    }, {
      "link":"http://hci.stanford.edu/courses/cs194h/2016/wi/projects/urbanSpire/",
      "title": "urbanSpire",
      "tagline": "Bring what you know & love to your new community",
      "students": ["Adrienne I", "Nikhita O", "Haley K", "Christina R"]
    }
];

var students = [
  {
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/dersua",
    name: "Dersu A"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/balegria",
    name: "Betsy A"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/sbuck",
    name: "Scott B"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/rchan2",
    name: "Raymond C"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/kchhan",
    name: "Ken C"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/atchustz",
    name: "Austin C"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/gegdean",
    name: "Gordon D"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/gdietz44",
    name: "Griffin D"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/kdumovic",
    name: "Kyle D"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/bduran",
    name: "Bronson D"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/dddutz",
    name: "Derin D"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/nathanje",
    name: "Nathaniel E"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/abfang",
    name: "Andrew F"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/lachlan",
    name: "Lachlan G"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/sgulati3",
    name: "Sukhi G"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/lorenah1",
    name: "Lorena H"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/sageis",
    name: "Sage I"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/aivey",
    name: "Adrienne I"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/kristerj",
    name: "Krister J"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/chris18",
    name: "Christina K"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/kkhieu",
    name: "Kevin K"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/hgkong",
    name: "Haley K"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/vickilau",
    name: "Vicki L"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/yuwenl",
    name: "Raymond L"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/lglucin",
    name: "Lloyd L"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/rayluong",
    name: "Raymond L"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/jakemck",
    name: "Jake M"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/amolina3",
    name: "Andrew M"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/cmulling",
    name: "Catherine M"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/jni221",
    name: "Julie N"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/enixon1",
    name: "Evan N"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/nix19",
    name: "Nikhita O"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/cqian",
    name: "Kyle Q"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/prao96",
    name: "Priyanka R"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/rresma2",
    name: "Rob R"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/jsalloum",
    name: "Justin S"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/zsaraon",
    name: "Zara S"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/tyler17",
    name: "Tyler S"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/spelman",
    name: "Hailey S"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/rtalreja",
    name: "Rohit T"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/lucast",
    name: "Lucas T"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/stu2",
    name: "Sharleen T"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/peter100",
    name: "Peter W"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/dewillis",
    name: "Dartis W"
  },{
    link: "http://hci.stanford.edu/courses/cs194h/2016/wi/studio/yahyavi",
    name: "Dominique Y"
  }
]
