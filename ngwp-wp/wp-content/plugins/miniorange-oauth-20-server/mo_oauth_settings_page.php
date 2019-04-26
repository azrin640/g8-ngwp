<?php


function mo_oauth_server_page() {

	$currenttab = "";
	if(isset($_GET['tab']))
		$currenttab = stripslashes($_GET['tab']);
	?>
	<?php
		if(mo_oauth_server_is_curl_installed()==0){ ?>
			<p style="color:red;">(Warning: <a href="http://php.net/manual/en/curl.installation.php" target="_blank">PHP CURL extension</a> is not installed or disabled. Please install/enable it before you proceed.)</p>
		<?php
		}
	?>
	<div id="mo_oauth_settings">
	<?php
        if ( $currenttab == 'licensing' || ! get_option( 'mo_oauth_show_mo_server_message' ) ) {
            ?>
            <form name="f" method="post" action="" id="mo_oauth_mo_server_form">
                <input type="hidden" name="option" value="mo_oauth_mo_server_message"/>
                <div class="notice notice-info" style="padding-right: 38px;position: relative;">
                    <h4>If you are looking for an OAuth Server,you can try out <a href="https://idp.miniorange.com" target="_blank">miniOrange On-Premise OAuth Server</a>.</h4>
                    <button type="button" class="notice-dismiss" id="mo_oauth_mo_server"><span class="screen-reader-text">Dismiss this notice.</span>
                    </button>
                </div>
            </form>
            <script>
                jQuery("#mo_oauth_mo_server").click(function () {
                    jQuery("#mo_oauth_mo_server_form").submit();
                    //jQuery("#notice notice-info").hide();
                });
            </script>
            <?php
        }
		?>
<div class="mo_tutorial_overlay" id="mo_tutorial_overlay" hidden></div>
<div id="tab">
	<h2 class="nav-tab-wrapper">
        <a class="nav-tab <?php if($currenttab == 'config'|| $currenttab === '') echo 'nav-tab-active';?>" href="admin.php?page=mo_oauth_server_settings&tab=config">OAuth Clients</a>
		<a class="nav-tab <?php if($currenttab == 'general_settings') echo 'nav-tab-active';?>" href="admin.php?page=mo_oauth_server_settings&tab=general_settings">Configurations</a>
		<a class="nav-tab <?php if($currenttab == 'attributemapping') echo 'nav-tab-active';?>" href="admin.php?page=mo_oauth_server_settings&tab=attributemapping">Server Response</a>
		<a class="nav-tab <?php if($currenttab == 'advanced_settings') echo 'nav-tab-active';?>" href="admin.php?page=mo_oauth_server_settings&tab=advanced_settings">Advanced Settings</a>
		<a class="nav-tab <?php if($currenttab == 'faq') echo 'nav-tab-active';?>" href="admin.php?page=mo_oauth_server_settings&tab=faq">Frequently Asked Questions [FAQ]</a>
		<a class="nav-tab <?php if($currenttab == 'login') echo 'nav-tab-active';?>" href="admin.php?page=mo_oauth_server_settings&tab=login">Account Setup</a>
		<a class="nav-tab <?php if($currenttab == 'licensing') echo 'nav-tab-active';?>" href="admin.php?page=mo_oauth_server_settings&tab=licensing">Licensing Plans</a>
	</h2>
</div>
	<div class="miniorange_container">
		<table style="width:100%;">
			<tr>
				<td style="vertical-align:top;width:65%;">
				
		<?php
	if ($currenttab == 'licensing') {
		mo_oauth_server_app_licensing();
	} else if($currenttab == 'advanced_settings') {
		mo_oauth_server_advanced_settings();
	} else if($currenttab == 'general_settings') {
		mo_oauth_server_general_settings();
	} else if($currenttab == 'attributemapping') {
		mo_oauth_server_attribute_mapping();
	} else if($currenttab == 'faq') {
		mo_oauth_server_faq();
	} else if($currenttab == 'config' || $currenttab === '') {
		mo_oauth_server_apps_config();
	} else if(get_option ( 'goto_registration' ) == true || $currenttab == 'login') {
		if (get_option ( 'verify_customer' ) == 'true') {
			mo_oauth_server_show_verify_password_page();
		} else if (trim ( get_option ( 'mo_oauth_admin_email' ) ) != '' && trim ( get_option ( 'mo_oauth_admin_api_key' ) ) == '' && get_option ( 'new_registration' ) != 'true') {
			mo_oauth_server_show_new_registration_page();
		} else if(get_option('mo_oauth_registration_status') == 'MO_OTP_DELIVERED_SUCCESS' || get_option('mo_oauth_registration_status') == 'MO_OTP_VALIDATION_FAILURE' ){
			mo_oauth_server_show_otp_verification();
		} else if(get_option('mo_oauth_registration_status') == 'MO_OTP_DELIVERED_SUCCESS_PHONE' || get_option('mo_oauth_registration_status') == 'MO_OTP_VALIDATION_FAILURE' ){
			mo_oauth_server_show_otp_verification_phone();
		} else {
			delete_option ( 'password_mismatch' );
			mo_oauth_server_show_new_registration_page();
		}
	}  else {
		mo_oauth_server_apps_config();
	}
	?>
			</td>
					<?php if($currenttab != 'licensing') { ?>
					<td style="vertical-align:top;padding-left:1%;">
						<?php echo mo_oauth_server_miniorange_support(); ?>
						<br/>
					</td>
					<?php } ?>
				</tr>
			</table>
			
		</div>
		<?php
}
function mo_oauth_show_customer_details(){
	?>
	<div class="mo_table_layout" >
		<h2>Thank you for registering with miniOrange.</h2>

		<table border="1"
		   style="background-color:#FFFFFF; border:1px solid #CCCCCC; border-collapse: collapse; padding:0px 0px 0px 10px; margin:2px; width:85%">
		<tr>
			<td style="width:45%; padding: 10px;">miniOrange Account Email</td>
			<td style="width:55%; padding: 10px;"><?php echo get_option( 'mo_oauth_admin_email' ); ?></td>
		</tr>
		<tr>
			<td style="width:45%; padding: 10px;">Customer ID</td>
			<td style="width:55%; padding: 10px;"><?php echo get_option( 'mo_oauth_admin_customer_key' ) ?></td>
		</tr>
		</table>
		<br /><br />

	<table>
	<tr>
	<td>
	<form name="f1" method="post" action="" id="mo_oauth_goto_login_form">
		<input type="hidden" value="change_miniorange" name="option"/>
		<input type="submit" value="Change Email Address" class="button button-primary button-large"/>
	</form>
	</td><td>
	<a href="<?php echo add_query_arg( array( 'tab' => 'licensing' ), htmlentities( $_SERVER['REQUEST_URI'] ) ); ?>"><input type="button" class="button button-primary button-large" value="Check Licensing Plans"/></a>
	</td>
	</tr>
	</table>

				<br />
	</div>

	<?php
}
function mo_oauth_server_show_new_registration_page() {
	if(mo_oauth_server_is_customer_registered()) {
		mo_oauth_show_customer_details();
	} else {
	
	update_option ( 'new_registration', 'true' );
	$current_user = wp_get_current_user();
	?>
			<!--Register with miniOrange-->
		<form name="f" method="post" action="">
			<input type="hidden" name="option" value="mo_oauth_register_customer" />
			<div class="mo_table_layout">
				<div id="toggle1" class="panel_toggle">
					<h3>Register with miniOrange</h3>
				</div>
				<div id="panel1">
					<!--<p><b>Register with miniOrange</b></p>-->
					<p>Please enter a valid Email ID that you have access to. You will be able to move forward after verifying an OTP that we will be sending to this email.
					</p>
					<table class="mo_settings_table">
						<tr>
							<td><b><font color="#FF0000">*</font>Email:</b></td>
							<td><input class="mo_table_textbox" type="email" name="email"
								required placeholder="person@example.com"
								value="<?php echo get_option('mo_oauth_admin_email');?>" />
							</td>
						</tr>
						<tr class="hidden">
							<td><b><font color="#FF0000">*</font>Website/Company Name:</b></td>
							<td><input class="mo_table_textbox" type="text" name="company"
							required placeholder="Enter website or company name"
							value="<?php echo $_SERVER['SERVER_NAME']; ?>"/></td>
						</tr>
						<tr class="hidden">
							<td><b>&nbsp;&nbsp;First Name:</b></td>
							<td><input class="mo_openid_table_textbox" type="text" name="fname"
							placeholder="Enter first name" value="<?php echo $current_user->user_firstname;?>" /></td>
						</tr>
						<tr class="hidden">
							<td><b>&nbsp;&nbsp;Last Name:</b></td>
							<td><input class="mo_openid_table_textbox" type="text" name="lname"
							placeholder="Enter last name" value="<?php echo $current_user->user_lastname;?>" /></td>
						</tr>

						<tr class="hidden">
							<td><b>&nbsp;&nbsp;Phone number :</b></td>
							 <td><input class="mo_table_textbox" type="text" name="phone" pattern="[\+]?([0-9]{1,4})?\s?([0-9]{7,12})?" id="phone" title="Phone with country code eg. +1xxxxxxxxxx" placeholder="Phone with country code eg. +1xxxxxxxxxx" value="<?php echo get_option('mo_oauth_admin_phone');?>" />
							 This is an optional field. We will contact you only if you need support.</td>
							</tr>
						</tr>
						<tr class="hidden">
							<td></td>
							<td>We will call only if you need support.</td>
						</tr>
						<tr>
							<td><b><font color="#FF0000">*</font>Password:</b></td>
							<td><input class="mo_table_textbox" required type="password"
								name="password" placeholder="Choose your password (Min. length 8)" /></td>
						</tr>
						<tr>
							<td><b><font color="#FF0000">*</font>Confirm Password:</b></td>
							<td><input class="mo_table_textbox" required type="password"
								name="confirmPassword" placeholder="Confirm your password" /></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td><br /><input type="submit" name="submit" value="Save" style="width:100px;"
								class="button button-primary button-large" /></td>
						</tr>
					</table>
				</div>
			</div>
		</form>
		<script>
			jQuery("#phone").intlTelInput();
		</script>

		<?php
		update_option ( 'goto_registration', false );
	}
}
function mo_oauth_server_show_verify_password_page() {
	?>
			<!--Verify password with miniOrange-->
		<form name="f" method="post" action="">
			<input type="hidden" name="option" value="mo_oauth_verify_customer" />
			<div class="mo_table_layout">
				<div id="toggle1" class="panel_toggle">
					<h3>Login with miniOrange</h3>
				</div>
				<div id="panel1">
					</p>
					<table class="mo_settings_table">
						<tr>
							<td><b><font color="#FF0000">*</font>Email:</b></td>
							<td><input class="mo_table_textbox" type="email" name="email"
								required placeholder="person@example.com"
								value="<?php echo get_option('mo_oauth_admin_email');?>" /></td>
						</tr>
						<td><b><font color="#FF0000">*</font>Password:</b></td>
						<td><input class="mo_table_textbox" required type="password"
							name="password" placeholder="Choose your password" /></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td><input type="submit" name="submit"
								class="button button-primary button-large" />&nbsp;&nbsp;
								<input type="button" name="register-button" value="Register"
									class="button button-primary button-large" onclick="document.getElementById('mo_oauth_register_form').submit();"/>&nbsp;&nbsp;
									<a target="_blank" href="<?php echo get_option('host_name') . "/moas/idp/userforgotpassword"; ?>">Forgot
									your password?</a></td>
						</tr>
					</table>
				</div>
			</div>
		</form>
		<form id="mo_oauth_register_form" method="post" action="">
			<input type="hidden" name="option" value="mo_oauth_register" />
		</form>
		<?php
}

function mo_oauth_server_faq() {
	echo '<div class="mo_table_layout">
	<object type="text/html" data="https://faq.miniorange.com/kb/oauth-server/" width="100%" height="600px" > 
	</object>
</div>';
}

function mo_oauth_server_sign_in_settings(){
	?>

	<div class="mo_table_layout">
		<h2>Sign in options</h2>

		<h4>Option 1: Use a Widget</h4>
		<ol>
			<li>Go to Appearances > Widgets.</li>
			<li>Select <b>"miniOrange OAuth"</b>. Drag and drop to your favourite location and save.</li>
		</ol>

		<h4>Option 2: Use a Shortcode</h4>
		<ul>
			<li>Place shortcode <b>[mo_oauth_login]</b> in wordpress pages or posts.</li>
		</ul>
	</div>
	<?php
}

function mo_oauth_server_app_howtosetup(){
	?>
	<style>
		.tableborder {border-collapse: collapse;width: 100%;border-color:#eee;}
		.tableborder th, .tableborder td {text-align: left;padding: 8px;border-color:#eee;}
		.tableborder tr:nth-child(even){background-color: #f2f2f2}
	</style>
	<div id="how_to_setup" class="mo_table_layout">
	<h2>Endpoints</h2>
	<p>You can configure below endpoints in your OAuth client.<p>
	<hr>
	<table class="tableborder">
	<?php 
		$plugin_folder_name =basename(dirname(__FILE__));
	?>
	<tr><td><b>Authorize Endpoint </b> : </td><td><?php echo site_url();?>/wp-content/plugins/<?php echo $plugin_folder_name; ?>/web/moserver/authorize</td></tr>
	<tr><td><b>Access Token Endpoint </b> : </td><td><?php echo site_url();?>/wp-content/plugins/<?php echo $plugin_folder_name; ?>/web/moserver/token</td></tr>
	<tr><td><b>Get User Info Endpoint </b> : </td><td><?php echo site_url();?>/wp-content/plugins/<?php echo $plugin_folder_name; ?>/web/moserver/resource</td></tr>
	<tr><td><b>Scope </b> : </td><td>profile</td></tr>
	</table>
	</div>


	<?php
}

function mo_oauth_server_app_licensing() {
    echo '<style>.update-nag, .updated, .error, .is-dismissible, .notice, .notice-error { display: none; }</style>';
    ?>
    <style>
        .mo_oauth_licensing_container {
            padding: 10px;

        }
        .clearfix:after {
            content: "";
            clear: both;
            display: table;
        }

        .mo_oauth_licensing_table {
            width: 90%;
            text-align: center;
            margin: 0 auto;
            padding: 10px;
        }

        .mo_oauth_licensing_table table {
            width: 100%;
            display:inline-block;
            overflow: hidden;
        }

        .mo_oauth_licensing_table th, td {
            border: 1px solid #eee;
            position: relative;
            padding: 10px;
            
        }

        .mo_oauth_licensing_head {
            /* background: #eeffdb; */
            font-weight: 500;
            font-variant: small-caps;
            font-size: 24px;
        }
        
        .mo_oauth_licensing_table td {
            text-align: left;
            padding: 15px;
            width: 20%;
        }

        .mo_oauth_licensing_table td:hover::before { 
            background-color: #ecfee8;
            content: '';  
            height: 100%;
            left: -5000px;
            position: absolute;  
            top: 0;
            width: 10000px;   
            z-index: -1;        
        }
        
        .mo_oauth_licensing_table td:hover::after { 
            background-color: #f7f7fc;
            content: '';  
            height: 10000px;    
            left: 0;
            position: absolute;  
            top: -5000px;
            width: 100%;
            z-index: -2;        
        }

        .mo_oauth_licensing_table_head td {
            text-align: center;
        }
        .mo_oauth_licensing_side_head {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 24px;
        }

        .mo_oauth_licensing_pricing td {
            text-align: center;
            background: rgba(249, 194, 46, 0.1);
        }

        .mo_oauth_licensing_currency {
            display: inline-block;
            font-size: 14px;
        }
        .mo_oauth_licensing_upgrade {
            background: #e3e8f2;
            color: #fff;
            text-align: center;
            padding: 10px;
            transition: all ease 1s;
        }
        .mo_oauth_licensing_upgrade a {
            text-decoration: none;
            color: #000;
            display: block;
            width: 100%;
            height: 100%;
        }

        .mo_oauth_licensing_upgrade:hover, a:hover {
            background: #ced3dc;
        }
        .mo_oauth_licensing_features td {
            text-align: center;
        }
        .mo_oauth_licensing_sites {
            display: block;
            margin-top: 15px;
            margin-bottom: 0px;
            padding: 5px;
            font-size: 16px;
            font-variant: small-caps;
        }
        .mo_oauth_licensing_feature {
            font-size: 14px;
        }
        .mo_oauth_licensing_current_plan {
            background: #c7efcf;
            color: #fff;
            transition: all ease 0.5s;
            text-decoration: none;
            color: #000;
            text-align: center;
            padding: 10px;
        }
        .mo_oauth_licensing_current_plan:hover {
            background: #bee5c6;
        }

        /* .mo_oauth_licensing_tick {
            background: #f7fff7;
        } */
        .mo_oauth_licensing_features_list {
            background: #f7f7f7;
        }
        .mo_oauth_licensing_features_list li {
            border-bottom: 1px solid #eee;
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
            padding: 10px;
            margin:0;
            text-align: center;
            text-transform: uppercase;
        }

        .mo_oauth_licensing_upgrade_steps {
            margin: 0 auto;
            width: 95%;
        }

        .mo_oauth_licensing_header {
            font-weight: 500;
            font-size: 24px;
            padding: 10px 5px 10px 5px;
        }
        .mo_oauth_licensing_ol {
            font-weight: 400;
            padding-left: 20px;
        }
        .mo_oauth_licensing_text {
            font-weight: 400;
            padding: 10px 20px 10px 40px;
        }
    </style>
    <input type="hidden" value="<?php echo mo_oauth_server_is_customer_registered();?>" id="mo_customer_registered">
    <form style="display:none;" id="loginform"
                action="<?php echo get_option( 'host_name' ) . '/moas/login'; ?>"
                target="_blank" method="post">
        <input type="email" name="username" value="<?php echo get_option( 'mo_oauth_admin_email' ); ?>"/>
        <input type="text" name="redirectUrl"
            value="<?php echo get_option( 'host_name' ) . '/moas/initializepayment'; ?>"/>
        <input type="text" name="requestOrigin" id="requestOrigin"/>
    </form>
    <div class="container-fluid">
        <div class="mo_oauth_licensing_container">
            <div class="clearfix">
                <div style="float:left;">
                    <a  class="button button-primary button-large" style="font-size: 16px;" href="<?php echo add_query_arg( array( 'tab' => 'config' ), htmlentities( $_SERVER['REQUEST_URI'] ) ); ?>"><span class="dashicons dashicons-arrow-left-alt" style="padding: 5px 0px;"></span> Back To Plugin Configuration</a>
                </div>
            </div>
            <br>
            <div class="mo_oauth_licensing_features">
            <div class="mo_oauth_licensing_table">
                <table>
                    <tr class="mo_oauth_licensing_table_head">
                        <td class="mo_oauth_licensing_side_head">Pricing</td>
                        <td class="mo_oauth_licensing_head">Free</td>
                        <td class="mo_oauth_licensing_head">Standard</td>
                        <td class="mo_oauth_licensing_head">Premium</td>
                        <td class="mo_oauth_licensing_head">Enterprise</td>
                    </tr>
                    <tr rowspan="2" class="mo_oauth_licensing_pricing">
                        <td class="mo_oauth_licensing_side_head">Annual</td>
                        <td><span class="mo_oauth_licensing_currency">$</span>0<p class="mo_oauth_licensing_sites">1 site</p></td>
                        <td><span class="mo_oauth_licensing_currency">$</span>49<p class="mo_oauth_licensing_sites">1 site</p></td>
                        <td><span class="mo_oauth_licensing_currency">$</span>79<p class="mo_oauth_licensing_sites">upto 5 sites</p></td>
                        <td><span class="mo_oauth_licensing_currency">$</span>299<p class="mo_oauth_licensing_sites">Unlimited Sites</p></td>
                    </tr>
                    <tr class="mo_oauth_licensing_table_head">
                        <td class="mo_oauth_licensing_side_head">features</td>
                        <td class="mo_oauth_licensing_current_plan">CURRENT PLAN</td>
                        <td class="mo_oauth_licensing_upgrade" style="padding: 0;"><a style="padding: 15px; width: 100%;" onclick="upgradeform('wp_oauth_server_basic_plan')" href="#">UPGRADE</a></td>
                        <td class="mo_oauth_licensing_upgrade" style="padding: 0;"><a style="padding: 15px;" onclick="upgradeform('wp_oauth_server_premium_plan')" href="#">UPGRADE</a></td>
                        <td class="mo_oauth_licensing_upgrade" style="padding: 0;"><a style="padding: 15px;" onclick="upgradeform('wp_oauth_server_enterprise_plan')" href="#">UPGRADE</a></td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Master Switch</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Block Unauthenticated Requests to the REST API</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Token Length</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Redirect/Callback URI Validation</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">OIDC Support</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Token Lifetime</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">JWT Support</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Error Logging</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Enforce State Parameter</td>
                        <td>Force Enabled</td>
                        <td class="mo_oauth_licensing_tick">User Configured</td>
                        <td class="mo_oauth_licensing_tick">User Configured</td>
                        <td class="mo_oauth_licensing_tick">User Configured</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Authorization Code Grant</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Implicit Grant</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Password Grant</td>
                        <td></td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Client Credentials Grant</td>
                        <td></td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Refresh Token Grant</td>
                        <td></td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Server Response</td>
                        <td></td>
                        <td>Customizable Basic Attribute</td>
                        <td class="mo_oauth_licensing_tick">Custom Attribute Mapping</td>
                        <td class="mo_oauth_licensing_tick">Custom Attribute Mapping</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Extended OAuth API support</td>
                        <td></td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Multi-site Support</td>
                        <td></td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">Login Reports</td>
                        <td></td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                    <tr class="mo_oauth_licensing_features">
                        <td class="mo_oauth_licensing_side_head mo_oauth_licensing_feature">JWT Signing Algorithm</td>
                        <td></td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                        <td class="mo_oauth_licensing_tick">&#10003;</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
        <a  id="mobacktoaccountsetup" style="display:none;" href="<?php echo add_query_arg( array( 'tab' => 'login' ), htmlentities( $_SERVER['REQUEST_URI'] ) ); ?>">Back</a>
    </div>
    <hr>
    <div class="mo_oauth_licensing_upgrade_steps">
        <div class="mo_oauth_licensing_header">Steps to Upgrade to Premium Plugin</div>
        <ol class="mo_oauth_licensing_ol">
            <li>Click on 'Upgrade now' button of the required licensing plan. You will be redirected to miniOrange Login Console. Enter your password with which you created an account with us. After that you will be redirected to payment page.</li>
            <li>Enter you card details and complete the payment. On successful payment completion, you will see the link to download the premium plugin.</li>
            <li>To install the premium plugin, first deactivate and delete the free version of the plugin.</li>
            <li>From this point on, do not update the premium plugin from the Wordpress store.</li>
        </ol>
        <div class="mo_oauth_licensing_header">* MultiSite Network Support</div>
        <div class="mo_oauth_licensing_text">There is additional cost for the number of subsites in Multisite Network .</div>

        <div class="mo_oauth_licensing_header">10 Days Return Policy</div>
        <div class="mo_oauth_licensing_text">At miniOrange, we want to ensure you are 100% happy with your purchase. If the premium plugin you purchased is
        not working as advertised and you've attempted to resolve any issues with our support team, which couldn't get
        resolved. We will refund the whole amount within 10 days of the purchase. Please email us at info@miniorange.com
        for any queries regarding the return policy.</div>

    </div>
    <script>

        function upgradeform(planType) {
            jQuery('#requestOrigin').val(planType);
            if(jQuery('#mo_customer_registered').val()==1)
                jQuery('#loginform').submit();
            else{
                location.href = jQuery('#mobacktoaccountsetup').attr('href');
            }

        }
    </script>
    <?php
}

function mo_oauth_server_advanced_settings() {
    $enable_oidc = (bool) get_option('mo_oauth_server_enable_oidc') ? get_option('mo_oauth_server_enable_oidc') : 'on';
    echo '<div id="enable_oidc" class="mo_table_layout">';
	echo '
	<form name="f" method="post" action="" style="padding: 10px;">
		<div id="toggle3" class="panel_toggle">
			<h3>OpenID Connect</h3>
		</div>
		<div id="mo_server_enable_oidc">
			Enable or Disable the support for OpenID Connect Protocol.<br><br>
			<label class="mo_switch">
                <input autocomplete="off" onclick="turnOff(this, \'mo_server_oidc_toggle\')"'; 
                if($enable_oidc === 'on') { echo "checked"; }
                echo ' type="checkbox" name="mo_server_enable_oidc">
				<span id="mo_server_oidc_toggle" class="mo_slider mo_round with_on_text">'; if($enable_oidc === 'on') { echo "ON"; } echo'</span>
			</label>&emsp;<strong>Enable OpenID Connect Support</strong>
			
			<br><br>
        </div>
        <input type="hidden" name="option" value="mo_oauth_server_enable_oidc" />
		<input type="submit" name="submit" value="Save Settings" class="button button-primary button-large" />
	</form>
</div>';
echo '
<div id="advancedsettings" class="mo_table_layout">
    <form disabled name="f" method="post" action="" style="padding: 10px;">
        <div id="toggle2" class="panel_toggle">
            <h3>Advanced Settings</h3>
        </div>
        <div id="advanced_panel">';
            echo '
            <h4>Select Grant Type</h4>
            <input onclick="showToast(this, true, \'grant_premium\')" type="checkbox" checked/>&nbsp;Authorization Code&nbsp;&nbsp;
            <input onclick="showToast(this, false, \'grant_premium\')" type="checkbox"/> Password&nbsp;&nbsp;
            <input onclick="showToast(this, false, \'grant_premium\')" type="checkbox"/> Client Credentials&nbsp;&nbsp;
            <input onclick="showToast(this, true, \'grant_premium\')" type="checkbox" checked/> Implicit Grant&nbsp;&nbsp;
            <input onclick="showToast(this, false, \'grant_premium\')" type="checkbox"/> Refresh Token Grant&nbsp;&nbsp;
            <br><div id="grant_premium" class="mo_premium_text">This is a premium feature. Check our licensing page for more info.</div><br><hr><br>
            <label class="mo_switch">
                <input disabled checked type="checkbox">
                <span class="mo_slider mo_round with_on_text">ON</span>
            </label>&emsp;<strong>Enable JWT Support</strong>&emsp;&emsp;<small>(Enabled only for OpenID Connect)</small><br/><br/>
            <b>Note : </b>Enable only if JWT is supported by your OAuth/OpenID client.&emsp;<small><font color="red">[PREMIUM]</font></small><br>
            
            <br><hr>
            <h4>Signing Algorithms</h4>
            <table>
            <tr><td><input type="radio" checked disabled/>&nbsp;HS256&nbsp;&nbsp;
            <input type="radio" disabled/> HS384&nbsp;&nbsp;
            <input type="radio" disabled/> HS512&nbsp;&nbsp;
            <input type="radio" disabled/> RS256&nbsp;&nbsp;
            <input type="radio" disabled/> RS384&nbsp;&nbsp;
            <input type="radio" disabled/> RS512</td>
            <td>&emsp;&emsp;</td>
            <td>&emsp;&emsp;</td>
            </table>
            <br>Determines Algorithm used for signing JWT.&emsp;<small><font color="red">[PREMIUM]</font></small><br>
            <br><hr>
            <h4>Signing Certificate:</h4>
            <input disabled type="button" class="button button-primary button-large" value="Download Signing Certificate">
            <br/><br/>In case of RSA, you will need to provide the signing certificate (public key) to your client.&emsp;<small><font color="red">[PREMIUM]</font></small><br><br><br>
            <input disabled type="submit" name="submit" value="Save Settings" class="button button-primary button-large" />
        </div>
    </form>
</div>
';
echo '
	<script>
		function showToast(element, checked, id) {
			element.checked = checked;
			var x = document.getElementById(id);
			x.classList.add("show");
			setTimeout(function(){ x.classList.remove("show") }, 6000);
        }
        
        function turnOff(element, id) {
            var sp = document.getElementById(id);
            if(element.checked != true) {
                sp.innerHTML = "";
            } else if(element.checked == true) {
                sp.innerHTML = "ON";
            }
        }
	</script>
	';
}

function mo_oauth_server_general_settings() {
    $master_switch = (bool) get_option('mo_oauth_server_master_switch') ? get_option('mo_oauth_server_master_switch') : 'on';
    $enforce_state = (bool) get_option('mo_oauth_server_enforce_state') ? get_option('mo_oauth_server_enforce_state') : 'on';
    $token_length = (bool) get_option('mo_oauth_server_token_length') ? (int) get_option('mo_oauth_server_token_length') : (int) 20;
	$expiry_time = (bool) get_option('mo_oauth_expiry_time') ? (int) get_option('mo_oauth_expiry_time') : 3600;
	$refresh_expiry_time = get_option('mo_oauth_refresh_expiry_time')?get_option('mo_oauth_refresh_expiry_time'):1209600;
    echo '<div id="master_switch" class="mo_table_layout">';
	echo '
	<form name="f" method="post" action="" style="padding: 0px 5px;">
		<div id="toggle3" class="panel_toggle">
			<h3>Master Switch</h3>
		</div>
		<div id="mo_server_master_switch">
            Disabling master switch will stop sending/receiveing API calls from/to your OAuth Client application.
        <p>
			<label class="mo_switch">
                <input autocomplete="off" onclick="turnOff(this, \'mo_server_mswitch_indicator\')"'; 
                if($master_switch === 'on') { echo "checked"; }
                echo ' type="checkbox" name="mo_server_master_switch">
				<span id="mo_server_mswitch_indicator" class="mo_slider mo_round with_on_text">'; if($master_switch === 'on') { echo "ON"; } echo '</span>
			</label>&emsp;<strong>Server</strong></p>
			<div id="mswitch_warning" style = "color: #FF0000;">';
			if(get_option('mo_oauth_server_master_switch') == 'off')
				echo '<p>Currently, your server is not responding to any API calls from your client applications.</p>';
			else
				echo '<br/>';
			echo '</div>
        </div>
        <input type="hidden" name="option" value="mo_oauth_server_master_switch" />
		<input type="submit" name="submit" value="Save Settings" class="button button-primary button-large" />
	</form>
</div>';
echo '
<div id="generalsettings" class="mo_table_layout">
<form name="f" method="post" action="">
    <input type="hidden" name="option" value="mo_oauth_general_settings" />
    <div>
        <div id="toggle1" class="panel_toggle">
            <h3>General Settings</h3>
        </div>
        <div id="panel1">
            <table class="mo_settings_table">
                <tr>
                    <td><b><font color="#FF0000">*</font>Access Token Expiry Time :<br> ( In seconds )</b></td>
                    <td><input class="mo_table_textbox" type="text" name="expiry_time"
                        required  value="'.$expiry_time.'" />
                    </td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                <tr>
                    <td><b><font color="#FF0000">*</font>Refresh Token Expiry Time :<br> ( In seconds )</b></td>
                    <td><input class="mo_table_textbox" type="text" name="refresh_expiry_time"
                        required  value="'.$refresh_expiry_time.'" />
                    </td>
                </tr>
                <tr>
                <tr><td>&nbsp;</td></tr>
                <tr>
                    <td><b>Token Length :</b></td>
                    <td><input class="mo_table_textbox" type="number" min="10" max="255" name="mo_server_token_length"
                        required value="'; echo $token_length; echo '" />
                    </td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                <tr>
                    <td>&nbsp;</td>
                    <td><input type="submit" name="submit" value="Save Settings"
                        class="button button-primary button-large" /></td>
                </tr>
            </table>
        </div>
    </div>
</form>
</div>';
echo '<div id="enforce_state" class="mo_table_layout">';
	echo '
	<form name="f" method="post" action="" style="padding: 0px 5px;">
		<div id="toggle3" class="panel_toggle">
			<h3>State Parameter</h3>
		</div>
		<div id="mo_server_enforce_state">
			Enable or Disable the State Parameter Validation.<br><br>
			<label class="mo_switch">
                <input autocomplete="off" onclick="turnOff(this, \'mo_server_enforcestate_indicator\')"'; 
                if($enforce_state === 'on') { echo "checked"; }
                echo ' type="checkbox" name="mo_server_enforce_state">
				<span id="mo_server_enforcestate_indicator" class="mo_slider mo_round with_on_text">'; if($enforce_state === 'on') { echo "ON"; } echo '</span>
			</label>&emsp;<strong>Enforce State Parameter</strong>
			
			<p>
			When enabled, the authorization request will fail if state parameter is not provided or is incorrect.</p>
        </div>
        <input type="hidden" name="option" value="mo_oauth_server_enforce_state" />
		<input type="submit" name="submit" value="Save Settings" class="button button-primary button-large" />
	</form>
</div>';
	echo '<div id="redirect_validation" class="mo_table_layout">';
	echo '
	<form name="f" method="post" action="" style="margin: 0px 5px;">
		<div id="toggle2" class="panel_toggle">
			<h3>Redirect/Callback URI Validation</h3>
		</div>
		<div id="callback_validation">
			<strong>Note :</strong> Use in case of Dynamic or Conditional Callback/Redirect URIs.<br><br>
			<label class="mo_switch">
				<input checked onclick="showToast(this, true, \'mo_premium_text\')"  type="checkbox">
				<span class="mo_slider mo_round with_on_text">ON</span>
			</label>&emsp;<strong>Validate Redirect/Callback URIs</strong><div id="mo_premium_text" class="mo_premium_text">This is a premium feature. Check our licensing page for more info.</div>
			
			<strong>How to use this feature?</strong><br><br>
			By default, server is configured with default redirect URL. <br><br>
			Disable this feature, in case if your client wants to redirect to a different page for certain conditions, such as, pre-registered users and guest users.
			
		</div>
		<br><br>
		<input disabled type="submit" name="submit" value="Save Settings" class="button button-primary button-large" />
	</form>
</div>';
	echo '
	<script>
		function showToast(element, checked, id) {
			element.checked = checked;
			var x = document.getElementById(id);
			x.classList.add("show");
			setTimeout(function(){ x.classList.remove("show") }, 6000);
        }
        
        function turnOff(element, id) {
            var sp = document.getElementById(id);
            if(element.checked != true) {
                if(id === "mo_server_mswitch_indicator") {
                    setTimeout(function(){ document.getElementById("mswitch_warning").classList.add("show") }, 200);
                }
                sp.innerHTML = "";
            } else if(element.checked == true) {
                if(id === "mo_server_mswitch_indicator") {
                    setTimeout(function(){ document.getElementById("mswitch_warning").classList.remove("show") }, 700);
                }
                sp.innerHTML = "ON";
            }
        }
        
	</script>
	';
}

function generate_dropdown_from_array($array) {
	echo '<select>';
	foreach($array as $item => $selected) {
		echo '<option value="'.$item.'">'.$item.'</option>';
	}
	echo '</select>';
}

function mo_oauth_server_attribute_mapping() {
	echo '
	<style>
		.tableborder {border-collapse: collapse;width: 100%;border-color:#eee;}
		.tableborder th, .tableborder td {text-align: left;padding: 8px;border-color:#eee;}
		.tableborder tr:nth-child(even){background-color: #f2f2f2}
	</style>
	';
	$server_response = array();
	$attrs = array(
		'username' => 'user_login',
		'email' => 'email',
		'first_name' => 'first_name',
		'last_name' => 'last_name',
		'display_name' => 'display_name',
		'nickname' => 'nickname',
	);

	$user_info = get_userdata(wp_get_current_user()->ID);
	$attr_value = array();
	foreach($user_info->data as $key => $value) {
		if($key !== 'user_pass' && $key !== 'user_activation_key' && $key !== 'user_status')
		array_push($attr_value, $key);
	}
	array_push($attr_value, 'user_firstname');
	echo '
		<div id="basicattributemapping" class="mo_table_layout">	
			<h3>Basic Attribute Mapping &emsp;<small class="mo_oauth_server_premium_feature"> [STANDARD FEATURE]</small></h3>
			You can customize and send below attriutes in response to your OAuth Client\'s Get User Information request.<br><br>
			<table class="mo_settings_table tableborder">
				<tr><td><b>Attribute Name</b></td><td><b>Attribute Value</b></td></tr>';
				foreach($attrs as $attr_name => $attr_value) {
					echo '<tr><td><input disabled type="text" placeholder="'.$attr_name.'" /></td>
					<td><select style="width: 150px;" disabled><option selected value="'.$attr_name.'">'.$attr_value.'</option></td></tr>';
				}
			echo '</table>
			<br><br><input disabled type="submit" name="submit" value="Save settings"
			class="button button-primary button-large" />
		</div>
	';
	echo '
	<div id="attributemapping" class="mo_table_layout">
	<form name="form-common" method="post" action="admin.php?page=mo_oauth_server_settings&tab=settings">
	<table class="mo_settings_table">';		

		echo '
		  <tr><td colspan="2">
		<h3>Map Custom Attributes &emsp;<small class="mo_oauth_server_premium_feature"> [PREMIUM FEATURE]</small></h3>Map extra User attributes which you wish to be included in the OAuth response. <br/>
		<b>Note : </b>Enter the name you want to send as attribute name under Attribute Name text field and meta field name under the Attribute Value text field. <br>

		</td><td><input disabled type="button" value="+" class="button button-primary"  /></td>
						<td><input disabled type="button" value="-" class="button button-primary" /></td></tr><br/>
						<tr><td>
		<b><u>Example</u> : </b></td></tr><tr>
		<tr><td><b>Attribute Name</b></td><td><b>Attribute Value</b></td></tr>
		<td><input disabled value="Given Name" /></td>
		<td><input disabled value="first_name" /></td></tr>
						<tr><td>&nbsp;</td></tr>';

		echo '<tr id="save_config_element">
			<td><input disabled type="submit" name="submit" value="Save settings"
			class="button button-primary button-large" /></td>
			<td>&nbsp;</td>
		</tr>
		</table>
	</form>
		
		</div>';
}

function mo_oauth_server_apps_config() {
	?>
	<style>
		.tableborder {border-collapse: collapse;width: 100%;border-color:#eee;}
		.tableborder th, .tableborder td {text-align: left;padding: 8px;border-color:#eee;}
		.tableborder tr:nth-child(even){background-color: #f2f2f2}
	</style>
	<div class="mo_table_layout">
	<?php

		if(isset($_GET['action']) && $_GET['action']=='delete'){
			if(isset($_GET['client']))
				mo_oauth_server_delete_app($_GET['client']);
		}

		if(isset($_GET['action']) && $_GET['action']=='add'){
			mo_oauth_server_add_app();
		}
		else if(isset($_GET['action']) && $_GET['action']=='update'){
			if(isset($_GET['client']))
				mo_oauth_server_update_app($_GET['client']);
		}
		else {
			mo_oauth_client_list();
		}  ?>
        </div>
        <?php
        mo_oauth_server_app_howtosetup();

}

function mo_oauth_emit_restart_tour() {
	$dismissed_pointers = get_user_meta(get_current_user_id(),'dismissed_wp_pointers', true);
	$disabled = 'disabled';
	if(count(explode(',', $dismissed_pointers)) >= 7) {
		$disabled = '';
	}
	
	?>
	
		<button <?php echo $disabled; ?> type="button" style='float:right; margin-right:5px;' id="restart_tour_id" class="button button-primary button-large" onclick="jQuery('#show_pointers').submit();"><i class="fa fa-refresh"></i>Restart Tour</button>
		<form name="f" method="post" id="show_pointers">
			<input type="hidden" name="option" value="clear_pointers"/>
		</form>
	<?php
}

function mo_oauth_client_list() {
	$moOauthServerDb = new MoOauthServerDb();
	$clientlist = $moOauthServerDb->get_clients();
	if (sizeof($clientlist) < 1) {
		echo "<br><a href='admin.php?page=mo_oauth_server_settings&tab=config&action=add'><button class=\"button button-primary button-large\" style='float:right' id=\"add_client\">Add Client</button></a></a>";
		mo_oauth_emit_restart_tour();
	} else {
		echo "<p style='color:#a94442;background-color:#f2dede;border-color:#ebccd1;border-radius:5px;padding:12px'>You can add only 1 client with free version. Upgrade to <a href='admin.php?page=mo_oauth_server_settings&tab=licensing'><b>premium</b></a> to add more.</p>";
		echo "<br><a href='admin.php?page=mo_oauth_server_settings&tab=config&action=add'><button id=\"add_client\" style='float:right' class=\"button button-primary button-large\" disabled>Add Client</button></a>";
		mo_oauth_emit_restart_tour();
	}
	echo "<h3>Clients List</h3>";
	
	echo "<table class='tableborder'>";
	echo "<tr><th><b>Client Name</b></th><th>Client ID</th><th>Client Secret</th></tr>";
	foreach($clientlist as $client){
		echo "<tr><td>".$client->client_name."
		<br>
		<a href='admin.php?page=mo_oauth_server_settings&tab=config&action=update&client=".$client->client_name."'>Update</a> | <a href='admin.php?page=mo_oauth_server_settings&tab=config&action=delete&client=".$client->client_name."'\" onclick =\"return confirm('Are you sure you want to delete this item?');\">Delete</a>
		</td><td>".$client->client_id."</td><td>".$client->client_secret."</td></tr>";
    }
	echo "</table>";
        if(sizeof($clientlist) === 0) {
            ?> 
                <p class="mo_oauth_server_noapps_text">There are no client apps configured.</p>
            <?php
        }
	echo "<br>";
}


function mo_oauth_server_add_app(){

	$moOauthServerDb = new MoOauthServerDb();
	$clientlist = $moOauthServerDb->get_clients();
	if(sizeof($clientlist) == 1)
			mo_oauth_client_list();
	else {
	?>

		<div id="toggle2" class="panel_toggle">
			<h3>Add Client</h3>

		</div>
		<form id="form-common" name="form-common" method="post" action="admin.php?page=mo_oauth_server_settings&tab=config">
		<input type="hidden" name="option" value="mo_oauth_add_client" />
		<table class="mo_settings_table">
			<tr id="client_name">
				<td><strong><font color="#FF0000">*</font>Client Name :</strong></td>
				<td><input class="mo_table_textbox" type="text" id="mo_oauth_custom_client_name" name="mo_oauth_custom_client_name" value=""></td>
			</tr>
			<tr id="redirect_uri">
				<td><strong><font color="#FF0000">*</font>Authorized Redirect URI :</strong></td>
				<td><input class="mo_table_textbox" required="" pattern="https?://.+" type="url" name="mo_oauth_client_redirect_url" value=""></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td><input id="client_save" type="submit" name="submit" value="Save Client"
					class="button button-primary button-large" /></td>
			</tr>
			</table>
		</form>

		<?php
	}
}

function mo_oauth_server_update_app($client_name){

	$moOauthServerDb = new MoOauthServerDb();
	$clientlist = $moOauthServerDb->get_clients();

	$currentclient =false;
	foreach($clientlist as $client){
		if($client_name == $client->client_name){
			$currentclient = $client;
			break;
		}
	}

	if(!$currentclient)
		return;


	?>

		<div id="toggle2" class="panel_toggle">
			<h3>Update Application</h3>
		</div>
		<form id="form-common" name="form-common" method="post" action="admin.php?page=mo_oauth_server_settings">
		<input type="hidden" name="option" value="mo_oauth_update_client" />
		<table class="mo_settings_table">
			<tr>
				<td><strong><font color="#FF0000">*</font>Client Name :</strong></td>
				<td><?php echo $currentclient->client_name;?><input class="mo_table_textbox" type="hidden" id="mo_oauth_custom_client_name" name="mo_oauth_custom_client_name" value="<?php echo $currentclient->client_name;?>"></td>
			</tr>
			<tr>
				<td><strong><font color="#FF0000">*</font>Authorized Redirect URI :</strong></td>
				<td><input class="mo_table_textbox" required="" pattern="https?://.+" type="url" name="mo_oauth_client_redirect_url" value="<?php echo $currentclient->redirect_uri;?>"></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td><input type="submit" name="submit" value="Update Client"
					class="button button-primary button-large" /></td>
			</tr>
			</table>
		</form>&nbsp;
		<?php

		
}

function mo_oauth_server_delete_app($appname){
	$moOauthServerDb = new MoOauthServerDb();
	$clientlist = $moOauthServerDb->delete_client($appname);
}

function mo_oauth_server_miniorange_support(){
?>
	<div id="mo_support_layout" class="mo_support_layout">
		<!--<h3>Support</h3>
		<div >
			<p>Your general questions can be asked in the plugin <a href="https://wordpress.org/support/plugin/miniorange-login-with-eve-online-google-facebook" target="_blank">support forum</a>.</p>
		</div>
		<div style="text-align:center;">
			<h4>OR</h4>
		</div>-->
		<div>
			<h3>Contact Us</h3>
			<form method="post" action="">
				<input type="hidden" name="option" value="mo_oauth_contact_us_query_option" />
				<table class="mo_settings_table">
					<tr>
						<td><input type="email" class="mo_table_textbox" required style="width:90%" name="mo_oauth_contact_us_email" placeholder="Enter email here" value="<?php echo get_option("mo_oauth_admin_email"); ?>"></td>
					</tr>
					<tr>
						<td><input type="tel" id="contact_us_phone" style="width:90%" pattern="[\+]\d{11,14}|[\+]\d{1,4}[\s]\d{9,10}" placeholder="Enter phone here" class="mo_table_textbox" name="mo_oauth_contact_us_phone" value="<?php echo get_option('mo_oauth_admin_phone');?>"></td>
					</tr>
					<tr>
						<td><textarea class="mo_table_textbox" style="width:90%" onkeypress="mo_oauth_valid_query(this)" placeholder="Enter your query here" onkeyup="mo_oauth_valid_query(this)" onblur="mo_oauth_valid_query(this)" required name="mo_oauth_contact_us_query" rows="4" style="resize: vertical;"></textarea></td>
					</tr>
				</table>
				<div style="text-align:center;">
					<input type="submit" name="submit" style="margin:15px; width:100px;" class="button button-primary button-large" />
				</div>
			</form>
		</div>
    </div>
    
	<script>
		jQuery("#contact_us_phone").intlTelInput();
		function mo_oauth_valid_query(f) {
			!(/^[a-zA-Z?,.\(\)\/@ 0-9]*$/).test(f.value) ? f.value = f.value.replace(
					/[^a-zA-Z?,.\(\)\/@ 0-9]/, '') : null;
		}
	</script>
    <br/>
		<div class="mo_support_layout">
			<div>
				<p><b>Looking for user provisioning? </b><a href="https://www.miniorange.com/wordpress-miniorange-scim-user-provisioner-with-onelogin">Click here </a> to know more about miniOrange SCIM User Provisioner Add-On.<br></p>
			</div>
		</div>
		<br/>
    <script type='text/javascript'>
    <!--//--><![CDATA[//><!--
            !function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
    //--><!]]>
    </script><iframe sandbox="allow-scripts" security="restricted" src="https://wordpress.org/plugins/miniorange-login-with-eve-online-google-facebook/embed/" width="100%" title="&#8220;OAuth Single Sign On &#8211; SSO (OAuth client)&#8221; &#8212; Plugin Directory" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="wp-embedded-content"></iframe>
<?php
}

function mo_oauth_server_show_otp_verification(){
	?>
		<!-- Enter otp -->
		<div class="mo_table_layout">
		<form name="f" method="post" id="otp_form" action="">
			<input type="hidden" name="option" value="mo_oauth_validate_otp" />
					<div id="panel5">
						<table class="mo_settings_table">
							<h3>Verify Your Email</h3>
							<tr>
								<td><b><font color="#FF0000">*</font>Enter OTP:</b></td>
								<td><input class="mo_table_textbox" autofocus="true" type="text" name="mo_oauth_otp_token" required placeholder="Enter OTP" style="width:61%;" pattern="[0-9]{6,8}"/>
								 &nbsp;&nbsp;<a style="cursor:pointer;" onclick="document.getElementById('mo_oauth_resend_otp_form').submit();">Resend OTP</a></td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td><br /><input type="submit" name="submit" value="Validate OTP" class="button button-primary button-large" />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<input type="button" name="back-button" id="mo_oauth_back_button" onclick="document.getElementById('mo_oauth_change_email_form').submit();" value="Back" class="button button-primary button-large" />
								</td>
							</tr>
						</table>
					</div>
		</form>
		<br>
		<form id="mo_oauth_register_with_phone_form" method="post" action="">
					<input type="hidden" name="option" value="mo_oauth_register_with_phone_option" />
					 If you can't see the email from miniOrange in your mails, please check your <b>SPAM</b> folder. If you don't see an email even in the SPAM folder, verify your identity with our alternate method.
					 <br><br>
						<b>Enter your valid phone number here and verify your identity using one time passcode sent to your phone.</b><br><br>
						<input class="mo_oauth_table_textbox" type="tel" id="phone_contact" style="width:40%;"
								pattern="[\+]\d{11,14}|[\+]\d{1,4}([\s]{0,1})(\d{0}|\d{9,10})" class="mo_oauth_table_textbox" name="phone"
								title="Phone with country code eg. +1xxxxxxxxxx" required
								placeholder="Phone with country code eg. +1xxxxxxxxxx"
								value="<?php echo get_option('mo_oauth_admin_phone');?>" />
						<br /><br /><input type="submit" value="Send OTP" class="button button-primary button-large" />
		</form>
		<form name="f" id="mo_oauth_resend_otp_form" method="post" action="">
			<input type="hidden" name="option" value="mo_oauth_resend_otp"/>
		</form>
		<form id="mo_oauth_change_email_form" method="post" action="">
			<input type="hidden" name="option" value="mo_oauth_change_email" />
		</form>
			</div>
<?php
}

function mo_oauth_server_show_otp_verification_phone() {
	?>
	<div class="mo_table_layout">
	<form name="f" method="post" id="otp_form" action="">
		<input type="hidden" name="option" value="mo_oauth_validate_otp" />
				<div id="panel5">
					<table class="mo_settings_table">
						<h3>Verify Your Phone</h3>
						<tr>
							<td><b><font color="#FF0000">*</font>Enter OTP:</b></td>
							<td><input class="mo_table_textbox" autofocus="true" type="text" name="mo_oauth_otp_token" required placeholder="Enter OTP" style="width:61%;" pattern="[0-9]{6,8}"/>
							 &nbsp;&nbsp;<a style="cursor:pointer;" onclick="document.getElementById('mo_oauth_resend_otp_form').submit();">Resend OTP</a></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
							<td><br /><input type="submit" name="submit" value="Validate OTP" class="button button-primary button-large" />
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<input type="button" name="back-button" id="mo_oauth_back_button" onclick="document.getElementById('mo_oauth_change_phone_form').submit();" value="Back" class="button button-primary button-large" />
							</td>
						</tr>
					</table>
				</div>
	</form>
	<form id="mo_oauth_change_phone_form" method="post" action="">
		<input type="hidden" name="option" value="mo_oauth_change_phone" />
	</form>
</div>
	<?php
}
?>
