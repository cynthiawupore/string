

// string.charAt(pos) 返回string中pos所在位置的字符
	var name = "Cynthia";
	var i = name.charAt(0)
	// alert(i)  //C

// string.charCodeAt(pos) 返回string中pos所在位置的字符的字符码位
	var n = name.charCodeAt(0)
	// alert(n)  //67

// string.concat(string)
    var s = 'C'.concat('i','n','c','o')
    // alert(s)   // Cinco

// string.indexOf(searchString,position) "从头到尾"在string中查找searchString字符，找到了，返回字符的位置;
// 否则，返回-1;position可以设置开始查找的位置
	var text = 'hello my name is wuqian'
	var p = text.indexOf('my');  //6
	var p = text.indexOf('my',13)   //-1
	// alert(p)


// string.lastIndexOf(searchString,position) "从尾到头"在string中查找searchString字符，找到了，返回字符的位置;
// 否则，返回-1;position可以设置开始查找的位置 
    var text2 = 'hello my name is wuqian'
	var p2 = text2.lastIndexOf('my');  //6
	// var p2 = text2.lastIndexOf('s')   //15
	// alert(p2)


// string.match(regexp) 根据regexp正则要求对string进行匹配
	// var text3 = '<html><body><p>'+'this is <b>bold</b><\/p><\/body><\/html>'
	// var tags = /[^<>]+|<(\/?)([A-Za-z]+)(^<>*)>/g;
	// var a,i;
	// a = text3.match(tags);
	// for(i=0;i<a.length;i+=1){
	// 	document.writeln(('// [' + i + ']' + a[i]).entityify());
	// }


//string.localeCompare(that)  比较
    var m = ['AAA','A','aa','a','Aa','aaa']
    m.sort(function(a,b){
    	return a.localeCompare(b)
    })
    // alert(m)  // a,A,aa,AA,aaa,AAA


// string.replace(searchValue,replaceValue) searchValue如果是一个字符，那么只会替换第一处
// searchValue如果是一个正则表达式
	var result = 'mother_in_law'.replace('_','-') 
	// alert(result) //mother-in_law


// string.slice(start,end) 复制start到end之间的string
    var q  = 'hello world ! an message from wuqian'
    var qm = q.slice(6,11)
    // alert(qm)  // world
   
// string.split(separator,limit)
    // var digits = '0123456789'
    // var a = digits.split('',5)
    // alert(a)

//string.substring(start,end)  和slice一样,不能处理负数

//string.toLocaleLowerCase()

//string.toLocaleUpperCase()

//string.toLowerCase()

//string.toUpperCase()