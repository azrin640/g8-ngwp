<?php
// source: /var/www/html/wp-content/plugins/ultimate-wp-rest/admin/template/element-range.latte

use Latte\Runtime as LR;

class Template5432104c6a extends Latte\Runtime\Template
{

	function main()
	{
		extract($this->params);
?>
<p class="range-field">
  <input type="range"<?php
		$_tmp = [$attr];
		echo LR\Filters::htmlAttributes(isset($_tmp[0]) && is_array($_tmp[0]) ? $_tmp[0] : $_tmp);
?>>
</p>
<p class="range-value"><?php echo LR\Filters::escapeHtmlText($attr['value']) /* line 4 */ ?></p><?php
		return get_defined_vars();
	}

}
