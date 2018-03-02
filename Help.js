
Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
"english": {
    "Help": {
        "name":"Help",
        "group":"User",
        "desc":"Shows list of available commands",
        "usage":"px!help [group|groups|command]"
    },
    "Ping": {
        "name":"Ping",
        "group":"User",
        "desc":"Pong! Shows latency",
        "usage":"px!ping"
    },
    "Weather": {
        "name":"Weather",
        "group":"Fun",
        "desc":"Shows informations about weather in <location>",
        "usage":"px!weather <location>"
    },
    "Spotify": {
        "name":"Spotify",
        "group":"User",
        "desc":"Shows informations about song listened by user",
        "usage":"px!spotify [user]"
    },
    "Stats": {
        "name":"Stats",
        "group":"User",
        "desc":"Sends information about your level and XP",
        "usage":"px!stats"
    },
    "Botinfo": {
        "name":"Botinfo",
        "group":"User",
        "desc":"Shows informations about bot",
        "usage":"px!botinfo"
    },
    "Userinfo": {
        "name":"Userinfo",
        "group":"User",
        "desc":"Shows informations about given user",
        "usage":"px!userinfo [user]"
    },
    "Uptime": {
        "name":"Uptime",
        "group":"User",
        "desc":"Shows times since bot started",
        "usage":"px!uptime"
    },
    "Serverinfo": {
        "name":"Serverinfo",
        "group":"User",
        "desc":"Shows informations about server it's issued on",
        "usage":"px!serverinfo"
    },
    "Roles": {
        "name":"Roles",
        "group":"User",
        "desc":"Shows list of server's roles",
        "usage":"px!roles"
    },
    "Purge": {
      "name":"Purge",
      "group":"Moderation",
      "desc":"Clears specified amount of messages from channel it's issued on",
      "usage":"px!purge <amount>"
    },
    "Dog": {
      "name":"Dog",
      "group":"Fun",
      "desc":"Sends random image of a dog",
      "usage":"px!dog"
    },
    "Cat": {
      "name":"Cat",
      "group":"Fun",
      "desc":"Sends random image of a cat",
      "usage":"px!cat"
    },
    "Mute": {
      "name":"Mute",
      "group":"Moderation",
      "desc":"Mutes user for a specified amount of time",
      "usage":"px!mute <user> <time in seconds>"
    },
    "Report": {
      "name":"Report",
      "group":"User",
      "desc":"Reports user",
      "usage":"px!report <user> <reason>"
    },
    "Ban": {
      "name":"Ban",
      "group":"Administration",
      "desc":"Permanently bans user from server",
      "usage":"px@ban <user> <reason>"
    },
    "Kick": {
      "name":"Kick",
      "group":"Administration",
      "desc":"Kicks user from server",
      "usage":"px@kick <user> <reason>"
    },
    "Warn": {
      "name":"Warn",
      "group":"Administration",
      "desc":"Warns user",
      "usage":"px@warn <user> <reason>"
    },
    "Setlogchannel": {
      "name":"Set log channel",
      "group":"Administration",
      "desc":"Sets channel for log messages, if no channel is specified, it will set channel it's issued on, as log channel",
      "usage":"px@setlogchannel [channel]"
    },
    "Setwarnchannel": {
      "name":"Set warn channel",
      "group":"Administration",
      "desc":"Sets channel for user warning messages, if no channel is specified, it will set channel it's issued on, as log channel",
      "usage":"px@setwarnchannel [channel]"
    },
    "Removelogchannel": {
      "name":"Remove log channel",
      "group":"Administration",
      "desc":"Disables log messages",
      "usage":"px@removelogchannel"
    },
    "Removewarnchannel": {
      "name":"Remove warn channel",
      "group":"Administration",
      "desc":"Disables warn system",
      "usage":"px@removewarnchannel"
    },
    "Setmaxwarns": {
      "name":"Set max warns",
      "group":"Administration",
      "desc":"Sets maximal count of warns before user will be banned (Default amount is 3)",
      "usage":"px@setmaxwarns <amount>"
    },
    "Setreportchannel": {
      "name":"Set report channel",
      "group":"Administration",
      "desc":"Sets channel for report messages, if no channel is specified, it will set channel it's issued on, as report channel",
      "usage":"px@setreportchannel [channel]"
    },
    "Removereportchannel": {
      "name":"Remove report channel",
      "group":"Administration",
      "desc":"Disables reports system",
      "usage":"px@removereportchannel"
    },
    "Setwelcomechannel": {
      "name":"Set welcome channel",
      "group":"Administration",
      "desc":"Sets channel for welcome/leave messages",
      "usage":"px@setwelcomechannel [channel]"
    },
    "Removewelcomechannel": {
      "name":"Remove welcome channel",
      "group":"Administration",
      "desc":"Disables welcome/leave messages",
      "usage":"px@removewelcomechannel"
    },
    "Setwelcomemessage": {
      "name":"Set welcome message",
      "group":"Administration",
      "desc":"Sets custom message sent when user joins",
      "usage":"px@setwelcomemessage <message>"
    },
    "Setleavemessage": {
      "name":"Set leave message",
      "group":"Administration",
      "desc":"Sets custom message sent when user leaves",
      "usage":"px@setleavemessage <message>"
    },
    "Setlanguage": {
      "name": "Set language",
      "group": "Administration",
      "desc": "Sets language used by bot (px@langlist for list of them)",
      "usage": "px@setlanguage <language>"
    },
    "Setchannellanguage": {
      "name": "Set channel language",
      "group": "Administration",
      "desc": "Sets language used by bot in given channel (px@langlist for list of them)",
      "usage": "px@setlanguage <language> [channel]"
    },
    "Debug": {
      "name": "Debug",
      "group": "User",
      "desc": "Screenshot of output will be needed when asking for help on support discord",
      "usage": "px!debug"
    }
  }
