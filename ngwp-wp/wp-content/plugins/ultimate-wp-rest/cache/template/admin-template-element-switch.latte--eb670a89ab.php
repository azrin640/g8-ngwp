<?php
// source: /var/www/html/wp-content/plugins/ultimate-wp-rest/admin/template/element-switch.latte

use Latte\Runtime as LR;

class Templateeb670a89ab extends Latte\Runtime\Template
{

	function main()
	{
		extract($this->params);
		if ($attr['value'] == 1) {
			$attr['checked'] = true;
		}
		?><div class="switch"><label><input type="checkbox"<?php
		$_tmp = [$attr];
		echo LR\Filters::htmlAttributes(isset($_tmp[0]) && is_array($_tmp[0]) ? $_tmp[0] : $_tmp);
		?>><span class="lever"></span></label></div><?php
		return get_defined_vars();
	}

}
