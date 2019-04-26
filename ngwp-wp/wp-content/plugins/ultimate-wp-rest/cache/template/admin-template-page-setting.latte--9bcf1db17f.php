<?php
// source: /var/www/html/wp-content/plugins/ultimate-wp-rest/admin/template/page-setting.latte

use Latte\Runtime as LR;

class Template9bcf1db17f extends Latte\Runtime\Template
{

	function main()
	{
		extract($this->params);
?>
<div class="wrap">
	<?php echo LR\Filters::escapeHtmlText(call_user_func($this->filters->php, 'settings_fields', 'seotool-settings-group')) /* line 2 */ ?>

  <!-- notice -->
  <div class="row">
    <div class="col s12">
      <?php echo LR\Filters::escapeHtmlText(call_user_func($this->filters->php, 'settings_errors')) /* line 6 */ ?>

    </div>
   </div>
  <!-- panel -->
  <div class="row">
    <div class="col s1"></div>
    <div class="col s10">
      <ul class="tabs">
<?php
		$iterations = 0;
		foreach ($data as $sPage => $aData) {
			?>        <li class="tab col"<?php
			$_tmp = [$aData['attr']];
			echo LR\Filters::htmlAttributes(isset($_tmp[0]) && is_array($_tmp[0]) ? $_tmp[0] : $_tmp);
?>>
          <a href="#<?php echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($aData['hash'])) /* line 15 */ ?>" class="<?php
			echo LR\Filters::escapeHtmlAttr($aData['hash'] == $active ? 'active' : NULL) /* line 15 */ ?>">
          <i class="material-icons"><?php echo LR\Filters::escapeHtmlText($aData['icon']) /* line 16 */ ?></i><?php
			echo LR\Filters::escapeHtmlText($aData['title']) /* line 16 */ ?></a>
        </li>
<?php
			$iterations++;
		}
?>      </ul>
      <div class="tabs-content">
        <form action="options.php" method="post" id="optionsForm">
<?php
		$iterations = 0;
		foreach ($data as $sPage => $aData) {
			?>          <div id="<?php echo LR\Filters::escapeHtmlAttr($aData['hash']) /* line 22 */ ?>">
            <?php echo LR\Filters::escapeHtmlText(call_user_func($this->filters->php, 'do_settings_sections', $sPage)) /* line 23 */ ?>

          </div>
<?php
			$iterations++;
		}
?>
          <button class="waves-effect waves-light btn">
          	<?php echo LR\Filters::escapeHtmlText(call_user_func($this->filters->php, '__', 'Save Settings', 'UTM_WP_REST_TEXTDOMAIN')) /* line 27 */ ?>

          </button>
        </form>
      </div>
    </div>
    <div class="col s1"></div>
  </div>
</div><?php
		return get_defined_vars();
	}


	function prepare()
	{
		extract($this->params);
		if (isset($this->params['sPage'])) trigger_error('Variable $sPage overwritten in foreach on line 13, 21');
		if (isset($this->params['aData'])) trigger_error('Variable $aData overwritten in foreach on line 13, 21');
		
	}

}
