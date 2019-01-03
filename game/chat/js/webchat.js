var VERSION = 1.0;

var { Query, User } = AV;
AV.init({
	appId: 'IDDU0rkX0FJ9hi2SFQgP1YIt-gzGzoHsz' ,
	appKey: 'K3zSqgPWAssTN9kyKWDJWG8y'
});

var Chat = AV.Object.extend('talk');
var Notice = AV.Object.extend('notice');
// var todo = Chat.create_without_data('5c29b63afb4ffe005fb0de88');
var todo = Chat.createWithoutData('5c29b63afb4ffe005fb0de88');

function print(s) { // {{{1
	alert(s);
}

function printinfo() { // {{{1
    // 'print infomation'
    todo.fetch();
    var ptr = todo.get('point');
    var talk = todo.get('contents');
    var size = todo.get('size');
	for(i=ptr+1;i<size;i++)
        if(len(talk[i]) == 3)
            print(talk[i][0] + talk[i][1] + ': ' + talk[i][2]);
	for(i=0;i<ptr+1;i++)
        if(len(talk[i]) == 3)
            print(talk[i][0] + talk[i][1] + ': ' + talk[i][2]);
}

function login_register(user, types) { // {{{1
    // 'get a user'
    if(types == '')
        return 1;
    if(types[0] == 'l') {
        var name = input('User name: ');
        var passwd = getpass.getpass('Password: ');
        user.login(name, passwd);
	} else if(types[0] == 'r') {
        print('You\'re registering a new user');
        var name = input('User name: ');
        passwd = getpass.getpass('Password: ');
        user.set_username(name);
        user.set_password(passwd);
        user.sign_up();
	} else
        return 1
    return 0
}

// def first(user): # {{{1
//     'first join in'
//     if ARGS.login:
//         login_register(user, 'login')
//     elif ARGS.register:
//         login_register(user, 'register')
//     else:
//         choose = input('login or register? ')
//         return login_register(user, choose)
//     return 0

// def updateinfo(user, con): # {{{1
//     'update information'
//     todo.fetch()
//     ptr = todo.get('point') + 1
//     times = todo.get('times') + 1
//     talk = todo.get('contents')
//     size = todo.get('size')
//     if ptr == size:
//         ptr = 0
//     talk[ptr] = [user.get('username'), time.strftime("%D:%H:%M"), con]
//     todo.set('point', ptr)
//     todo.set('times', times)
//     todo.set('contents', talk)
//     todo.save()

// def welcome(): # {{{1
//     'welcome screen'
//     print(colorama.Fore.BLUE, end='')
//     print('┌─────────────────────────┐')
//     print('│        Welcome !!!      │')
//     print('│                         │')
//     print('│  p   y   c   h   a   t  │')
//     print('│                         │')
//     print('│     VERSION:  ', VERSION, '     │')
//     print('└─────────────────────────┘')
//     info = Notice.create_without_data('5c29d4ab9f5454007005488b')
//     info.fetch()
//     print(colorama.Fore.RED, 'Notice:\n', info.get('content'))
//     print(colorama.Style.RESET_ALL)

// def cammond(com): # {{{1
//     'deal with a cammond'
//     res1, res2 = 'null', ''
//     if com in ('quit', 'q', 'exit'):
//         res1, res2 = 'quit', 'You quited!'
//     if com in ('w', 'who'):
//         pass
//     else:
//         res2 = 'No such a cammond!'
//     return res1, res2

// def main(): # {{{1
//     'Main function'
//     user = AV.User()
//     welcome()
//     if first(user) == 1:
//         print('failed')
//         return 1
//     caminfo = ''
//     while True:
//         # os.system("clear")
//         printinfo()
//         print(caminfo)
//         con = input('Input yours(input :q or :exit to quit)$ ')
//         comres = 'null'
//         if con == '':
//             caminfo = 'input EMPTY!'
//             continue
//         elif con[0] == ':':
//             comres, caminfo = cammond(con[1:])
//         else:
//             updateinfo(user, con)
//             caminfo = ''
//         if comres == 'quit':
//             break

// # }}}1

// RES = main()
// # os.system("clear")
// exit(RES)
