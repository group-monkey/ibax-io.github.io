(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{466:function(e,t,n){"use strict";n.r(t);var o=n(51),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"server-configuration-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration-file"}},[e._v("#")]),e._v(" Server Configuration File")]),e._v(" "),n("p",[e._v("In this section, we will introduce parameters in the server configuration file.")]),e._v(" "),n("h2",{attrs:{id:"introduction-to-the-server-configuration-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-the-server-configuration-file"}},[e._v("#")]),e._v(" Introduction to the server configuration file")]),e._v(" "),n("p",[e._v("The server configuration file defines the node configuration of IBAX.")]),e._v(" "),n("h2",{attrs:{id:"location"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" Location")]),e._v(" "),n("p",[e._v("This file is located in the working directory of the server and is named "),n("code",[e._v("config.toml")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"sections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sections"}},[e._v("#")]),e._v(" Sections")]),e._v(" "),n("p",[e._v("The configuration file consists the following sections:")]),e._v(" "),n("blockquote",[n("p",[e._v("general section")])]),e._v(" "),n("p",[e._v("It defines the working directory DataDir, the first block directory FirstBlockPath and other parameters.")]),e._v(" "),n("blockquote",[n("p",[e._v("[TCPServer]")])]),e._v(" "),n("p",[e._v("It defines the TCP service parameters.")]),e._v(" "),n("p",[e._v("TCPServer is used for the network interaction between nodes.")]),e._v(" "),n("blockquote",[n("p",[e._v("[HTTP]")])]),e._v(" "),n("p",[e._v("It defines the HTTP service parameters.")]),e._v(" "),n("p",[e._v("HTTPServer provides RESTful APIs.")]),e._v(" "),n("blockquote",[n("p",[e._v("[DB]")])]),e._v(" "),n("p",[e._v("It defines parameters of the PostgreSQL node database.")]),e._v(" "),n("blockquote",[n("p",[e._v("[StatsD]")])]),e._v(" "),n("p",[e._v("It defines parameters of the node operation indicator collector StatsD.")]),e._v(" "),n("blockquote",[n("p",[e._v("[Centrifugo]")])]),e._v(" "),n("p",[e._v("It defines parameters of the notification service Centrifugo.")]),e._v(" "),n("blockquote",[n("p",[e._v("[Log]")])]),e._v(" "),n("p",[e._v("It defines parameters of the log service Log.")]),e._v(" "),n("blockquote",[n("p",[e._v("[TokenMovement]")])]),e._v(" "),n("p",[e._v("It defines parameters of the token circulation service TokenMovement.")]),e._v(" "),n("h2",{attrs:{id:"an-example-configuration-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-example-configuration-file"}},[e._v("#")]),e._v(" An example configuration file")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('PidFilePath = "/IBAX-data/go-ibax.pid"\nLockFilePath = "/IBAX-data/go-ibax.lock"\nDataDir = "/IBAX-data"\nKeysDir = "/IBAX-data"\nTempDir = "/var/folders/_l/9md_m4ms1651mf5pbng1y1xh0000gn/T/IBAX-temp"\nFirstBlockPath = "/IBAX-data/1block"\nTLS = false\nTLSCert = ""\nTLSKey = ""\nOBSMode = "none"\nHTTPServerMaxBodySize = 1048576\nMaxPageGenerationTime = 3000\nNodesAddr = []\n\n[TCPServer]\n  Host = "127.0.0.1"\n  Port = 7078\n\n[HTTP]\n  Host = "127.0.0.1"\n  Port = 7079\n\n[DB]\n  Name = "IBAX"\n  Host = "127.0.0.1"\n  Port = 5432\n  User = "postgres"\n  Password = "123456"\n  LockTimeout = 5000\n\n[StatsD]\n  Host = "127.0.0.1"\n  Port = 8125\n  Name = "IBAX"\n\n[Centrifugo]\n  Secret = "127.0.0.1"\n  URL = "127.0.0.1"\n\n[Log]\n  LogTo = "stdout"\n  LogLevel = "ERROR"\n  LogFormat = "text"\n  [Log.Syslog]\n  Facility = "kern"\n  Tag = "go-ibax"\n\n[TokenMovement]\n  Host = ""\n  Port = 0\n  Username = ""\n  Password = ""\n  To = ""\n  From = ""\n  Subject = ""\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);