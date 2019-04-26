<?php
// source: /var/www/html/wp-content/plugins/ultimate-wp-rest/admin/template/element-select.latte

use Latte\Runtime as LR;

class Templatef8f098f2e9 extends Latte\Runtime\Template
{

	function main()
	{
		extract($this->params);
		?><select<?php
		$_tmp = [$attr];
		echo LR\Filters::htmlAttributes(isset($_tmp[0]) && is_array($_tmp[0]) ? $_tmp[0] : $_tmp);
?>>
<?php
		$iterations = 0;
		foreach ($option as $sValue => $mName) {
			if (call_user_func($this->filters->php, 'is_array', $mName)) {
				?>  <optgroup label="<?php echo LR\Filters::escapeHtmlAttr($sValue) /* line 3 */ ?>">
<?php
				$iterations = 0;
				foreach ($mName as $sChildValue => $sChildName) {
					if (call_user_func($this->filters->php, 'is_array', $attr['value'])) {
						?>      <option value="<?php echo LR\Filters::escapeHtmlAttr($sChildValue) /* line 5 */ ?>" <?php echo LR\Filters::escapeHtmlAttrUnquoted(call_user_func($this->filters->php, 'in_array', $sChildValue, $attr['value']) ? 'selected' : NULL) /* line 5 */ ?>><?php
						echo LR\Filters::escapeHtmlText($sChildName) /* line 5 */ ?></option>
<?php
					}
					else {
						?>      <option value="<?php echo LR\Filters::escapeHtmlAttr($sChildValue) /* line 7 */ ?>" <?php echo LR\Filters::escapeHtmlAttrUnquoted($sChildValue == $attr['value'] ? 'selected' : NULL) /* line 7 */ ?>><?php
						echo LR\Filters::escapeHtmlText($sChildName) /* line 7 */ ?></option>
<?php
					}
					$iterations++;
				}
?>  </optgroup>
<?php
			}
			else {
				if (call_user_func($this->filters->php, 'is_array', $attr['value'])) {
					?>      <option value="<?php echo LR\Filters::escapeHtmlAttr($sValue) /* line 12 */ ?>" <?php echo LR\Filters::escapeHtmlAttrUnquoted(call_user_func($this->filters->php, 'in_array', $sValue, $attr['value']) ? 'selected' : NULL) /* line 12 */ ?>><?php
					echo LR\Filters::escapeHtmlText($mName) /* line 12 */ ?></option>
<?php
				}
				else {
					?>      <option value="<?php echo LR\Filters::escapeHtmlAttr($sValue) /* line 14 */ ?>" <?php echo LR\Filters::escapeHtmlAttrUnquoted($sValue == $attr['value'] ? 'selected' : NULL) /* line 14 */ ?>><?php
					echo LR\Filters::escapeHtmlText($mName) /* line 14 */ ?></option>
<?php
				}
			}
			$iterations++;
		}
?></select>
<?php
		return get_defined_vars();
	}


	function prepare()
	{
		extract($this->params);
		if (isset($this->params['sChildValue'])) trigger_error('Variable $sChildValue overwritten in foreach on line 3');
		if (isset($this->params['sChildName'])) trigger_error('Variable $sChildName overwritten in foreach on line 3');
		if (isset($this->params['sValue'])) trigger_error('Variable $sValue overwritten in foreach on line 1');
		if (isset($this->params['mName'])) trigger_error('Variable $mName overwritten in foreach on line 1');
		
	}

}
