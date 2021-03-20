//添加数据
function add_localstorage(addkey,addvalue,maxLength)
{	
	//console.log(addvalue);
	//获取当前时间 并在json中增加时间戳
	var curtime = new Date().getTime();
	addvalue. time = curtime;
	//获取本次添加的json mvid
	var add_mvid = addvalue.json_mv_id;
	//声明一个本地存储过的json = null
	var read_local_json=[];
	//先判断是否有过存储行为
	var have_local = localStorage.hasOwnProperty(addkey);
	//判断本地信息
	if(have_local){
		var tmp_local_json = localStorage.getItem(addkey);
		tmp_local_json = JSON.parse(tmp_local_json);
		
		//判断重复内容所在的索引值
		var local_double_index = -1;
		$.each(tmp_local_json,function(index,item){
			var _tmp_json_mvid = item.json_mv_id;
			if(_tmp_json_mvid==add_mvid)
			{
				local_double_index = index;
				return true;
			}
		});
		//如果这个元素出现了，删除对应的元素
		if(local_double_index>=0){tmp_local_json.splice(local_double_index,1)}
		//在开头插入新元素
		tmp_local_json.unshift(addvalue);
		//只取当前指定长度的内容
		if(maxLength>0){
			tmp_local_json = tmp_local_json.splice(0,maxLength);
		}
		//赋值给外部变量
		read_local_json = tmp_local_json;
	}
	else
	{	
		//如果本地没有使用过，就吧参数设置过来
		read_local_json.push(addvalue);
	}
	//把json转换为字符串
	var json_to_str = JSON.stringify(read_local_json);
	//添加json字符串到local
	localStorage.setItem(addkey,json_to_str);
	//结束方法体
}

function out_localHtml(outKey)
{
	var have_local = localStorage.hasOwnProperty(outKey);
	var _Put_html = "";
	if(have_local)
	{
		_Put_html = _Put_html + "<ul class='caidan_hslist'>";
		var tmp_local_json = localStorage.getItem(outKey);
		tmp_local_json = JSON.parse(tmp_local_json);
		$.each(tmp_local_json,function(index,item){
			var _tmp_json_mvid = item.json_mv_id;
			var _tmp_json_mvname = item.json_mv_name;
			var _tmp_json_playid = item.json_mv_url;
			var _tmp_json_mvnote = item.json_mv_note;
			_Put_html = _Put_html + "<li><em>"+(index+1)+"</em><a href='"+_tmp_json_playid+"'>"+_tmp_json_mvname+"</a><span>"+_tmp_json_mvnote+"</span></li>";
		});
		_Put_html = _Put_html + '<li class="clear_history" onclick="clear_localstorage(\'mv_history\')">清空所有观看记录</li>';
		_Put_html = _Put_html + "</ul>";
	}
	else
	{
		_Put_html = "<div class='no_history'>您尚未有观影记录</div>";
	}
	//输出内容
	$("#history_list").html(_Put_html);
	//return _Put_html;
}

function clear_localstorage(clearKey)
{
	localStorage.removeItem(clearKey);
	out_localHtml(clearKey);
}