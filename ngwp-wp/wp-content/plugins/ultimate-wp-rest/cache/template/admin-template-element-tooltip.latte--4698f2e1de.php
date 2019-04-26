<?php
// source: /var/www/html/wp-content/plugins/ultimate-wp-rest/admin/template/element-tooltip.latte

use Latte\Runtime as LR;

class Template4698f2e1de extends Latte\Runtime\Template
{

	function main()
	{
		extract($this->params);
		$defaultAttr = ['data-delay' => 50, 'data-position' => 'top'];
		$attr = call_user_func($this->filters->php, 'array_merge', $defaultAttr, $attr);
		$attr['value'] = '';
		$attr['name'] = '';
		extract(['icon' => 'help'], EXTR_SKIP) ?><i class="material-icons tooltip prefix"<?php
		$_tmp = [$attr];
		echo LR\Filters::htmlAttributes(isset($_tmp[0]) && is_array($_tmp[0]) ? $_tmp[0] : $_tmp);
		?>><?php echo LR\Filters::escapeHtmlText($icon) /* line 5 */ ?></i><?php
		return get_defined_vars();
	}

}
