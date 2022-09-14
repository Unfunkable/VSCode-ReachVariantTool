import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const defaultProvider = vscode.languages.registerCompletionItemProvider('rvt', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const forEachPlayer = new vscode.CompletionItem("for each player do");
			forEachPlayer.insertText = new vscode.SnippetString("for each player do\n\t$0\nend");

			const forEachPlayerRandom = new vscode.CompletionItem("for each player randomly do");
			forEachPlayerRandom.insertText = new vscode.SnippetString("for each player randomly do\n\t$0\nend");

			const forEachObject = new vscode.CompletionItem("for each object do");
			forEachObject.insertText = new vscode.SnippetString("for each object do\n\t$0\nend");

			const forEachObjectLabel = new vscode.CompletionItem("for each object with label do");
			forEachObjectLabel.insertText = new vscode.SnippetString("for each object with label \"${1:<label>}\" do\n\t$0\nend");

			const forEachTeam = new vscode.CompletionItem("for each team do");
			forEachTeam.insertText = new vscode.SnippetString("for each team do\n\t$0\nend");

			const pregame = new vscode.CompletionItem("on pregame: do");
			pregame.insertText = new vscode.SnippetString("on pregame: do\n\t$0\nend");

			const init = new vscode.CompletionItem("on init: do");
			init.insertText = new vscode.SnippetString("on init: do\n\t$0\nend");

			const localInit = new vscode.CompletionItem("on local init: do");
			localInit.insertText = new vscode.SnippetString("on local init: do\n\t$0\nend");

			const hostMigration = new vscode.CompletionItem("on host migration: do");
			hostMigration.insertText = new vscode.SnippetString("on host migration: do\n\t$0\nend");

			const doubleHostMigration = new vscode.CompletionItem("on double host migration: do");
			doubleHostMigration.insertText = new vscode.SnippetString("on double host migration: do\n\t$0\nend");

			const objectDeath = new vscode.CompletionItem("on object death: do");
			objectDeath.insertText = new vscode.SnippetString("on object death: do\n\t$0\nend");

			const local = new vscode.CompletionItem("on local: do");
			local.insertText = new vscode.SnippetString("on local: do\n\t$0\nend");

			const keywordThen = new vscode.CompletionItem("then", vscode.CompletionItemKind.Keyword)
			const keywordIf = new vscode.CompletionItem("if", vscode.CompletionItemKind.Keyword)
			const keywordDo = new vscode.CompletionItem("do", vscode.CompletionItemKind.Keyword)
			const keywordEnd = new vscode.CompletionItem("end", vscode.CompletionItemKind.Keyword)
			const keywordDeclare = new vscode.CompletionItem("declare", vscode.CompletionItemKind.Keyword)
			const keywordAlias = new vscode.CompletionItem("alias", vscode.CompletionItemKind.Keyword)
			const keywordNot = new vscode.CompletionItem("not", vscode.CompletionItemKind.Keyword)
			const keywordAlt = new vscode.CompletionItem("alt", vscode.CompletionItemKind.Keyword)
			const keywordAltif = new vscode.CompletionItem("altif", vscode.CompletionItemKind.Keyword)
			const keywordNetworkPriority = new vscode.CompletionItem("with network priority", vscode.CompletionItemKind.Keyword)
			keywordNetworkPriority.insertText = new vscode.SnippetString("with network priority ${1|<priority>,local,low,high|}$0");
			const current_object = new vscode.CompletionItem("current_object", vscode.CompletionItemKind.Keyword)
			const current_player = new vscode.CompletionItem("current_player", vscode.CompletionItemKind.Keyword)
			const current_team = new vscode.CompletionItem("current_team", vscode.CompletionItemKind.Keyword)
			const directPlayer = new vscode.CompletionItem("player", vscode.CompletionItemKind.Keyword)
			directPlayer.insertText = new vscode.SnippetString("player[${1:n}]$0");
			const script_option = new vscode.CompletionItem("script_option", vscode.CompletionItemKind.Keyword)
			script_option.insertText = new vscode.SnippetString("script_option[${1:n}]$0");
			const script_traits = new vscode.CompletionItem("script_traits", vscode.CompletionItemKind.Keyword)
			script_traits.insertText = new vscode.SnippetString("script_traits[${1:n}]$0");
			const script_widget = new vscode.CompletionItem("script_widget", vscode.CompletionItemKind.Keyword)
			script_widget.insertText = new vscode.SnippetString("script_widget[${1:n}]$0");
			const directTeam = new vscode.CompletionItem("team", vscode.CompletionItemKind.Keyword)
			directTeam.insertText = new vscode.SnippetString("team[${1:n}]$0");

			const get_random_object = new vscode.CompletionItem("get_random_object", vscode.CompletionItemKind.Function)
			get_random_object.insertText = new vscode.SnippetString("get_random_object(${1:<label>}, ${2:<exclude>})$0");

			const rand = new vscode.CompletionItem("rand", vscode.CompletionItemKind.Function)
			rand.insertText = new vscode.SnippetString("rand(${1:<cap>})$0");

			const send_incident = new vscode.CompletionItem("send_incident", vscode.CompletionItemKind.Function)
			send_incident.insertText = new vscode.SnippetString("send_incident(${1:<incident>}, ${2:<cause>}, ${3:<target>}$0)");

			const set_scenario_interpolator_state = new vscode.CompletionItem("set_scenario_interpolator_state", vscode.CompletionItemKind.Function)
			set_scenario_interpolator_state.insertText = new vscode.SnippetString("set_scenario_interpolator_state(${1:<which>}, ${2:<state>})$0");

			const nsGame = new vscode.CompletionItem("game", vscode.CompletionItemKind.Keyword);
			nsGame.commitCharacters = ['.'];

			const globalVars = new vscode.CompletionItem("global");
			globalVars.commitCharacters = ['.'];

			const obj = new vscode.CompletionItem("object");
			obj.commitCharacters = ['.'];

			const player = new vscode.CompletionItem("player");
			player.commitCharacters = ['.'];

			const team = new vscode.CompletionItem("team");
			team.commitCharacters = ['.'];

			return [
				forEachPlayer,
				forEachPlayerRandom,
				forEachObject,
				forEachObjectLabel,
				forEachTeam,
				nsGame,
				globalVars,
				obj,
				team,
				keywordIf,
				keywordThen,
				keywordDo,
				keywordEnd,
				keywordAlias,
				keywordDeclare,
				keywordNot,
				keywordAlt,
				keywordAltif,
				keywordNetworkPriority,
				new vscode.CompletionItem("no_object", vscode.CompletionItemKind.Keyword),
				current_object,
				current_player,
				current_team,
				directPlayer,
				script_option,
				script_traits,
				script_widget,
				directTeam,
				send_incident,
				get_random_object,
				rand,
				send_incident,
				set_scenario_interpolator_state,
				pregame,
				init,
				localInit,
				hostMigration,
				doubleHostMigration,
				objectDeath,
				local
			];
		}
	});

	const namespaceGame = vscode.languages.registerCompletionItemProvider(
		'rvt',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {


				const show_message_to = new vscode.CompletionItem('show_message_to', vscode.CompletionItemKind.Function)
				show_message_to.insertText = new vscode.SnippetString('show_message_to(${1|<who>,current_player,current_team|}, ${2|<sound>,none,announce_slayer,announce_ctf,announce_ctf_captured|}, \"${3:<text>}\")');


				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('game.')) {
					return undefined;
				}
				

				return [
					show_message_to,
					new vscode.CompletionItem('end_round()', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('play_sound_for()', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem("betrayal_booting", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("betrayal_penalty", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("current_round", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("dead_players_can_talk", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("dont_team_restrict_chat", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("fireteams_enabled", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("friendly_fire", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("grace_period_time", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("grenades_enabled", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("indestructable_vehicles", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("lives_per_round", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("loadout_cam_time", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("perfection_enabled", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("powerup_duration_blue", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("powerup_duration_red", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("powerup_duration_yellow", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("proximity_voice", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("respawn_growth", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("respawn_time", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("respawn_traits_time", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("round_limit", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("round_time_limit", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("round_timer", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("rounds_to_win", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("score_to_win", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("sudden_death_time", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("sudden_death_timer", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("suicide_penalty", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("symmetry", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("symmetry_get", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("team_lives_per_round", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("teams_enabled", vscode.CompletionItemKind.Method),
				];
			}
		},
		'.'
	);

	const globalVariables = vscode.languages.registerCompletionItemProvider(
		'rvt',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {


				const num = new vscode.CompletionItem("number", vscode.CompletionItemKind.Variable)
				num.insertText = new vscode.SnippetString("number[${1:n}]$0");

				const obj = new vscode.CompletionItem("object", vscode.CompletionItemKind.Variable)
				obj.insertText = new vscode.SnippetString("object[${1:n}]$0");

				const player = new vscode.CompletionItem("player", vscode.CompletionItemKind.Variable)
				player.insertText = new vscode.SnippetString("player[${1:n}]$0");

				const team = new vscode.CompletionItem("team", vscode.CompletionItemKind.Variable)
				team.insertText = new vscode.SnippetString("team[${1:n}]$0");
				
				const timer = new vscode.CompletionItem("timer", vscode.CompletionItemKind.Variable)
				timer.insertText = new vscode.SnippetString("timer[${1:n}]$0");
			

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('global.')) {
					return undefined;
				}

				return [
					num,
					obj,
					player,
					team,
					timer,
				];
			}
		},
		'.'
	);

	const typeObject = vscode.languages.registerCompletionItemProvider(
		'rvt',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const num = new vscode.CompletionItem("number", vscode.CompletionItemKind.Variable)
				num.insertText = new vscode.SnippetString("number[${1:n}]$0");

				const obj = new vscode.CompletionItem("object", vscode.CompletionItemKind.Variable)
				obj.insertText = new vscode.SnippetString("object[${1:n}]$0");

				const player = new vscode.CompletionItem("player", vscode.CompletionItemKind.Variable)
				player.insertText = new vscode.SnippetString("player[${1:n}]$0");

				const team = new vscode.CompletionItem("team", vscode.CompletionItemKind.Variable)
				team.insertText = new vscode.SnippetString("team[${1:n}]$0");
				
				const timer = new vscode.CompletionItem("timer", vscode.CompletionItemKind.Variable)
				timer.insertText = new vscode.SnippetString("timer[${1:n}]$0");

				const has_forge_label = new vscode.CompletionItem("has_forge_label", vscode.CompletionItemKind.Function)
				has_forge_label.insertText = new vscode.SnippetString("has_forge_label(\"${1:label}\")$0");

				const is_in_use = new vscode.CompletionItem("is_in_use", vscode.CompletionItemKind.Function)
				is_in_use.insertText = new vscode.SnippetString("is_in_use()$0");

				const is_of_type = new vscode.CompletionItem("is_of_type", vscode.CompletionItemKind.Function)
				is_of_type.insertText = new vscode.SnippetString("is_of_type(${1|<type>,spartan,elite,monitor,flag,bomb,skull,hill_marker,flag_stand,capture_plate,frag_grenade,plasma_grenade,dmr,assault_rifle,plasma_pistol,spiker,needle_rifle,plasma_repeater,energy_sword,magnum,needler,plasma_rifle,rocket_launcher,shotgun,sniper_rifle,beam_rifle,spartan_laser,gravity_hammer,warthog,ghost,scorpion,wraith,banshee,mongoose,falcon,sabre,sprint,jetpack,armor_lock,active_camo_aa,revenant,pickup_truck,focus_rifle,respawn_zone,plasma_launcher,fusion_coil,initial_spawn_point,health_pack,fireteam_1_respawn_zone,fireteam_2_respawn_zone,fireteam_3_respawn_zone,semi_truck,soccer_ball,golf_ball,golf_club,golf_cup,dice,concussion_rifle,grenade_launcher,phantom_approach,hologram,evade,unsc_data_core,danger_zone,data_core_beam,longsword,particle_emitter_fire,phantom_scenery,pelican_scenery,covenant_drop_pod,respawn_zone_weak,respawn_zone_weak_anti,phantom_device,resupply_capsule,initial_loadout_camera,invisible_covenant_resupply_capsule,covenant_power_core,fuel_rod_gun,drop_shield,detached_machine_gun_turret,machine_gun_turret,detached_plasma_cannon,plasma_cannon,shade,electric_cart,forklift,oni_van,warthog_turret,warthog_turret_gauss,warthog_turret_rocket,scorpion_turret_anti_infantry,falcon_turret_grenade_left,falcon_turret_grenade_right,wraith_turret_anti_infantry,landmine,target_locator,block_1x1_flat,shade_gun_anti_air,shade_gun_fuel_rod,shade_gun_plasma,kill_ball,light_red,light_blue,light_green,light_orange,light_purple,light_yellow,light_white,light_red_flashing,light_yellow_flashing,fx_colorblind,fx_gloomy,fx_juicy,fx_nova,fx_olde_timey,fx_pen_and_ink,fx_purple,fx_orange,fx_green,grid,sound_emitter_alarm_1,sound_emitter_alarm_2,safe_boundary,soft_safe_boundary,kill_boundary,soft_kill_boundary,unsc_data_core_holder,covenant_power_module_stand,covenant_bomb,heavy_barrier,breakpoint_bomb_door|})$0");

				const is_out_of_bounds = new vscode.CompletionItem("is_out_of_bounds", vscode.CompletionItemKind.Function)
				is_out_of_bounds.insertText = new vscode.SnippetString("is_out_of_bounds()$0");

				const shape_contains = new vscode.CompletionItem("shape_contains", vscode.CompletionItemKind.Function)
				shape_contains.insertText = new vscode.SnippetString("shape_contains(${1:other})$0");

				const add_weapon = new vscode.CompletionItem("add_weapon", vscode.CompletionItemKind.Function)
				add_weapon.insertText = new vscode.SnippetString("add_weapon(${1:weapon}, ${2|mode,primary,secondary,force|})$0");

				const animate_device_position = new vscode.CompletionItem("animate_device_position", vscode.CompletionItemKind.Function)
				animate_device_position.insertText = new vscode.SnippetString("animate_device_position(${1:animation_target}, ${2:animation_duration}, ${3:acceleration}, ${4:deceleration})$0");

				const apply_shape_color_from_player_member = new vscode.CompletionItem("apply_shape_color_from_player_member", vscode.CompletionItemKind.Function)
				apply_shape_color_from_player_member.insertText = new vscode.SnippetString("apply_shape_color_from_player_member(${1:member})$0");

				const attach_to = new vscode.CompletionItem("attach_to", vscode.CompletionItemKind.Function)
				attach_to.insertText = new vscode.SnippetString("attach_to(${1:<basis>}, ${2:<x>}, ${3:<y>}, ${4:<z>}, ${5|<reference_frame>,absolute,relative|})$0");
				
				const copy_rotation_from = new vscode.CompletionItem("copy_rotation_from", vscode.CompletionItemKind.Function)
				copy_rotation_from.insertText = new vscode.SnippetString("copy_rotation_from(${1:<other>}, ${2|<all_axes>,true,false|})");

				const obj_delete = new vscode.CompletionItem("delete", vscode.CompletionItemKind.Function)
				obj_delete.insertText = new vscode.SnippetString("delete()$0");

				const detach = new vscode.CompletionItem("detach", vscode.CompletionItemKind.Function)
				detach.insertText = new vscode.SnippetString("detach()$0");

				const enable_spawn_zone = new vscode.CompletionItem("enable_spawn_zone", vscode.CompletionItemKind.Function)
				enable_spawn_zone.insertText = new vscode.SnippetString("enable_spawn_zone(${1|0,1|})");

				const face_toward = new vscode.CompletionItem("face_toward", vscode.CompletionItemKind.Function)
				face_toward.insertText = new vscode.SnippetString("face_toward(${1:<other>}, ${2:<x>}, ${3:<y>}, ${4:<z>})$0");

				const get_device_position = new vscode.CompletionItem("get_device_position", vscode.CompletionItemKind.Function)
				get_device_position.insertText = new vscode.SnippetString("get_device_position()$0");

				const get_device_power = new vscode.CompletionItem("get_device_power", vscode.CompletionItemKind.Function)
				get_device_power.insertText = new vscode.SnippetString("get_device_power()$0");

				const get_distance_to = new vscode.CompletionItem("get_distance_to", vscode.CompletionItemKind.Function)
				get_distance_to.insertText = new vscode.SnippetString("get_distance_to(${1:<other>})");

				const get_orientation = new vscode.CompletionItem("get_orientation", vscode.CompletionItemKind.Function)
				get_orientation.insertText = new vscode.SnippetString("get_orientation()$0");

				const get_speed = new vscode.CompletionItem("get_speed", vscode.CompletionItemKind.Function)
				get_speed.insertText = new vscode.SnippetString("get_speed()$0");

				const kill = new vscode.CompletionItem("kill", vscode.CompletionItemKind.Function)
				kill.insertText = new vscode.SnippetString("kill(${1|<silent>,true,false|})");

				const place_at_me = new vscode.CompletionItem("place_at_me", vscode.CompletionItemKind.Function)
				place_at_me.insertText = new vscode.SnippetString("place_at_me(${1|<type>,spartan,elite,monitor,flag,bomb,skull,hill_marker,flag_stand,capture_plate,frag_grenade,plasma_grenade,dmr,assault_rifle,plasma_pistol,spiker,needle_rifle,plasma_repeater,energy_sword,magnum,needler,plasma_rifle,rocket_launcher,shotgun,sniper_rifle,beam_rifle,spartan_laser,gravity_hammer,warthog,ghost,scorpion,wraith,banshee,mongoose,falcon,sabre,sprint,jetpack,armor_lock,active_camo_aa,revenant,pickup_truck,focus_rifle,respawn_zone,plasma_launcher,fusion_coil,initial_spawn_point,health_pack,fireteam_1_respawn_zone,fireteam_2_respawn_zone,fireteam_3_respawn_zone,semi_truck,soccer_ball,golf_ball,golf_club,golf_cup,dice,concussion_rifle,grenade_launcher,phantom_approach,hologram,evade,unsc_data_core,danger_zone,data_core_beam,longsword,particle_emitter_fire,phantom_scenery,pelican_scenery,covenant_drop_pod,respawn_zone_weak,respawn_zone_weak_anti,phantom_device,resupply_capsule,initial_loadout_camera,invisible_covenant_resupply_capsule,covenant_power_core,fuel_rod_gun,drop_shield,detached_machine_gun_turret,machine_gun_turret,detached_plasma_cannon,plasma_cannon,shade,electric_cart,forklift,oni_van,warthog_turret,warthog_turret_gauss,warthog_turret_rocket,scorpion_turret_anti_infantry,falcon_turret_grenade_left,falcon_turret_grenade_right,wraith_turret_anti_infantry,landmine,target_locator,block_1x1_flat,shade_gun_anti_air,shade_gun_fuel_rod,shade_gun_plasma,kill_ball,light_red,light_blue,light_green,light_orange,light_purple,light_yellow,light_white,light_red_flashing,light_yellow_flashing,fx_colorblind,fx_gloomy,fx_juicy,fx_nova,fx_olde_timey,fx_pen_and_ink,fx_purple,fx_orange,fx_green,grid,sound_emitter_alarm_1,sound_emitter_alarm_2,safe_boundary,soft_safe_boundary,kill_boundary,soft_kill_boundary,unsc_data_core_holder,covenant_power_module_stand,covenant_bomb,heavy_barrier,breakpoint_bomb_door|}, ${2:<label>}, ${3|<flags>,none,never_garbage_collect,suppress_effect,absolute_orientation|}, ${4:<x>}, ${5:<y>}, ${6:<z>}, ${7|<variant-string-id>,default,carter,jun,female,male,emile,player_skull,kat,minor,officer,ultra,space,spec_ops,general,zealot,mp,jetpack,gauss,troop,rocket,fr,pl,35_spire_fp|})$0");

				const place_between_me_and = new vscode.CompletionItem("place_between_me_and", vscode.CompletionItemKind.Function)
				place_between_me_and.insertText = new vscode.SnippetString("place_between_me_and(${1:<other>}, ${2|<type>,spartan,elite,monitor,flag,bomb,skull,hill_marker,flag_stand,capture_plate,frag_grenade,plasma_grenade,dmr,assault_rifle,plasma_pistol,spiker,needle_rifle,plasma_repeater,energy_sword,magnum,needler,plasma_rifle,rocket_launcher,shotgun,sniper_rifle,beam_rifle,spartan_laser,gravity_hammer,warthog,ghost,scorpion,wraith,banshee,mongoose,falcon,sabre,sprint,jetpack,armor_lock,active_camo_aa,revenant,pickup_truck,focus_rifle,respawn_zone,plasma_launcher,fusion_coil,initial_spawn_point,health_pack,fireteam_1_respawn_zone,fireteam_2_respawn_zone,fireteam_3_respawn_zone,semi_truck,soccer_ball,golf_ball,golf_club,golf_cup,dice,concussion_rifle,grenade_launcher,phantom_approach,hologram,evade,unsc_data_core,danger_zone,data_core_beam,longsword,particle_emitter_fire,phantom_scenery,pelican_scenery,covenant_drop_pod,respawn_zone_weak,respawn_zone_weak_anti,phantom_device,resupply_capsule,initial_loadout_camera,invisible_covenant_resupply_capsule,covenant_power_core,fuel_rod_gun,drop_shield,detached_machine_gun_turret,machine_gun_turret,detached_plasma_cannon,plasma_cannon,shade,electric_cart,forklift,oni_van,warthog_turret,warthog_turret_gauss,warthog_turret_rocket,scorpion_turret_anti_infantry,falcon_turret_grenade_left,falcon_turret_grenade_right,wraith_turret_anti_infantry,landmine,target_locator,block_1x1_flat,shade_gun_anti_air,shade_gun_fuel_rod,shade_gun_plasma,kill_ball,light_red,light_blue,light_green,light_orange,light_purple,light_yellow,light_white,light_red_flashing,light_yellow_flashing,fx_colorblind,fx_gloomy,fx_juicy,fx_nova,fx_olde_timey,fx_pen_and_ink,fx_purple,fx_orange,fx_green,grid,sound_emitter_alarm_1,sound_emitter_alarm_2,safe_boundary,soft_safe_boundary,kill_boundary,soft_kill_boundary,unsc_data_core_holder,covenant_power_module_stand,covenant_bomb,heavy_barrier,breakpoint_bomb_door|}, ${3:radius})$0");

				const push_upward = new vscode.CompletionItem("push_upward", vscode.CompletionItemKind.Function)
				push_upward.insertText = new vscode.SnippetString("push_upward()$0");

				const apply_upward_impulse = new vscode.CompletionItem("apply_upward_impulse", vscode.CompletionItemKind.Function)
				apply_upward_impulse.insertText = new vscode.SnippetString("apply_upward_impulse()$0");

				const remove_weapon = new vscode.CompletionItem("remove_weapon", vscode.CompletionItemKind.Function)
				remove_weapon.insertText = new vscode.SnippetString("remove_weapon(${1|<mode>,primary,secondary|}, ${2|<delete>,true,false|})$0");

				const set_device_actual_position = new vscode.CompletionItem("set_device_actual_position", vscode.CompletionItemKind.Function)
				set_device_actual_position.insertText = new vscode.SnippetString("set_device_actual_position(${1:<position>})$0");

				const set_device_animation_position = new vscode.CompletionItem("set_device_animation_position", vscode.CompletionItemKind.Function)
				set_device_animation_position.insertText = new vscode.SnippetString("set_device_animation_position(${1|<animation>,mp_boneyard_a_idle_start,mp_boneyard_a_fly_in,mp_boneyard_a_idle_mid,mp_boneyard_a_fly_out,mp_boneyard_b_fly_in,mp_boneyard_b_idle_mid,mp_boneyard_b_fly_out,mp_boneyard_b_idle_start,mp_boneyard_a_leave1,mp_boneyard_b_leave1,mp_boneyard_b_pickup,mp_boneyard_b_idle_pickup,mp_boneyard_a,mp_boneyard_b,mp_spire_fp|}, ${2:<position>})$0");

				const set_device_position = new vscode.CompletionItem("set_device_position", vscode.CompletionItemKind.Function)
				set_device_position.insertText = new vscode.SnippetString("set_device_position(${1:<position>})$0");

				const set_device_power = new vscode.CompletionItem("set_device_power", vscode.CompletionItemKind.Function)
				set_device_power.insertText = new vscode.SnippetString("set_device_power(${1:<power>})$0");

				const set_garbage_collection_disabled = new vscode.CompletionItem("set_garbage_collection_disabled", vscode.CompletionItemKind.Function)
				set_garbage_collection_disabled.insertText = new vscode.SnippetString("set_garbage_collection_disabled(${1|0,1|})$0");

				const set_invincibility = new vscode.CompletionItem("set_invincibility", vscode.CompletionItemKind.Function)
				set_invincibility.insertText = new vscode.SnippetString("set_invincibility(${1|0,1|})$0");

				const set_pickup_permissions = new vscode.CompletionItem("set_pickup_permissions", vscode.CompletionItemKind.Function)
				set_pickup_permissions.insertText = new vscode.SnippetString("set_pickup_permissions(${1|<who>,no_one,everyone,allies,enemies,default,mod_player|}$0)");

				const set_progress_bar = new vscode.CompletionItem("set_progress_bar", vscode.CompletionItemKind.Function)
				set_progress_bar.insertText = new vscode.SnippetString("set_progress_bar(${1:<timer>}, ${2|<who>,no_one,everyone,allies,enemies,default,mod_player|}$0)");

				const set_scale = new vscode.CompletionItem("set_scale", vscode.CompletionItemKind.Function)
				set_scale.insertText = new vscode.SnippetString("set_scale(${1:<scale>})");

				const set_shape = new vscode.CompletionItem("set_shape", vscode.CompletionItemKind.Function)
				set_shape.insertText = new vscode.SnippetString("set_shape(${1|<type>,none,sphere,cylinder,box|}$0)");

				const set_shape_visibility = new vscode.CompletionItem("set_shape_visibility", vscode.CompletionItemKind.Function)
				set_shape_visibility.insertText = new vscode.SnippetString("set_shape_visibility(${1|<who>,no_one,everyone,allies,enemies,default,mod_player|}$0)");

				const set_spawn_location_fireteams = new vscode.CompletionItem("set_spawn_location_fireteams", vscode.CompletionItemKind.Function)
				set_spawn_location_fireteams.insertText = new vscode.SnippetString("set_spawn_location_fireteams(${1|<fireteam_indice>,none,all|})$0");

				const set_spawn_location_permissions = new vscode.CompletionItem("set_spawn_location_permissions", vscode.CompletionItemKind.Function)
				set_spawn_location_permissions.insertText = new vscode.SnippetString("set_spawn_location_permissions(${1|<who>,no_one,everyone,allies,enemies,default,mod_player|}$0)");

				const set_waypoint_icon = new vscode.CompletionItem("set_waypoint_icon", vscode.CompletionItemKind.Function)
				set_waypoint_icon.insertText = new vscode.SnippetString("set_waypoint_icon(${1|<icon>,none,speaker,dead_teammate_marker,lightning_bolt,bullseye,diamond,bomb,flag,skull,crown,vip,padlock,territory_a,territory_b,territory_c,territory_d,territory_e,territory_f,terrtory_g,territory_h,territory_i,supply,supply_health,supply_air_drop,supply_ammo,arrow,defend,ordnance,inward|})$0");

				const set_waypoint_priority = new vscode.CompletionItem("set_waypoint_priority", vscode.CompletionItemKind.Function)
				set_waypoint_priority.insertText = new vscode.SnippetString("set_waypoint_priority(${1|<priority>,low,normal,high,blink|})$0");

				const set_waypoint_range = new vscode.CompletionItem("set_waypoint_range", vscode.CompletionItemKind.Function)
				set_waypoint_range.insertText = new vscode.SnippetString("set_waypoint_range(${1:<min>}, ${2:<max>})$0");

				const set_waypoint_text = new vscode.CompletionItem("set_waypoint_text", vscode.CompletionItemKind.Function)
				set_waypoint_text.insertText = new vscode.SnippetString("set_waypoint_text(\"${1:<text>}\"$0)");

				const set_waypoint_timer = new vscode.CompletionItem("set_waypoint_timer", vscode.CompletionItemKind.Function)
				set_waypoint_timer.insertText = new vscode.SnippetString("set_waypoint_timer(${1|<timer>,none|})$0");

				const set_waypoint_visibility = new vscode.CompletionItem("set_waypoint_visibility", vscode.CompletionItemKind.Function)
				set_waypoint_visibility.insertText = new vscode.SnippetString("set_waypoint_visibility(${1|<who>,no_one,everyone,allies,enemies,default,mod_player|}$0)");

				const set_weapon_pickup_priority = new vscode.CompletionItem("set_weapon_pickup_priority", vscode.CompletionItemKind.Function)
				set_weapon_pickup_priority.insertText = new vscode.SnippetString("set_weapon_pickup_priority(${1|<priority>,normal,high,automatic|})$0");

				const try_get_carrier = new vscode.CompletionItem("try_get_carrier", vscode.CompletionItemKind.Function)
				try_get_carrier.insertText = new vscode.SnippetString("try_get_carrier()$0");

				const get_carrier = new vscode.CompletionItem("get_carrier", vscode.CompletionItemKind.Function)
				get_carrier.insertText = new vscode.SnippetString("get_carrier()$0");

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('object.') && !linePrefix.endsWith('biped.') && !/object\[[0-9]\]./.test(linePrefix)) {
					return undefined;
				}

				return [
					num,
					obj,
					player,
					team,
					timer,
					new vscode.CompletionItem("spawn_sequence", vscode.CompletionItemKind.Property),
					new vscode.CompletionItem("team", vscode.CompletionItemKind.Property),
					new vscode.CompletionItem("health", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("max_health", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("max_shields", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("shields", vscode.CompletionItemKind.Method),
					has_forge_label,
					is_in_use,
					is_of_type,
					shape_contains,
					add_weapon,
					animate_device_position,
					apply_shape_color_from_player_member,
					attach_to,
					copy_rotation_from,
					obj_delete,
					enable_spawn_zone,
					face_toward,
					get_device_position,
					get_device_power,
					get_distance_to,
					get_orientation,
					get_speed,
					kill,
					place_at_me,
					push_upward,
					apply_upward_impulse,
					remove_weapon,
					set_device_actual_position,
					set_device_animation_position,
					set_device_position,
					set_device_power,
					set_garbage_collection_disabled,
					set_invincibility,
					set_pickup_permissions,
					set_progress_bar,
					set_scale,
					set_shape,
					set_shape_visibility,
					set_spawn_location_fireteams,
					set_spawn_location_permissions,
					set_waypoint_icon,
					set_waypoint_priority,
					set_waypoint_range,
					set_waypoint_text,
					set_waypoint_timer,
					set_waypoint_visibility,
					set_weapon_pickup_priority,
					try_get_carrier,
					get_carrier
				];
			}
		},
		'.'
	);

	const typePlayer = vscode.languages.registerCompletionItemProvider(
		'rvt',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {


				const num = new vscode.CompletionItem("number", vscode.CompletionItemKind.Variable)
				num.insertText = new vscode.SnippetString("number[${1:n}]$0");

				const obj = new vscode.CompletionItem("object", vscode.CompletionItemKind.Variable)
				obj.insertText = new vscode.SnippetString("object[${1:n}]$0");

				const player = new vscode.CompletionItem("player", vscode.CompletionItemKind.Variable)
				player.insertText = new vscode.SnippetString("player[${1:n}]$0");

				const team = new vscode.CompletionItem("team", vscode.CompletionItemKind.Variable)
				team.insertText = new vscode.SnippetString("team[${1:n}]$0");
				
				const timer = new vscode.CompletionItem("timer", vscode.CompletionItemKind.Variable)
				timer.insertText = new vscode.SnippetString("timer[${1:n}]$0");

				const script_stat = new vscode.CompletionItem("script_stat", vscode.CompletionItemKind.Property)
				script_stat.insertText = new vscode.SnippetString("script_stat[${1:n}]");

				const assisted_kill_of = new vscode.CompletionItem("assisted_kill_of", vscode.CompletionItemKind.Function)
				assisted_kill_of.insertText = new vscode.SnippetString("assisted_kill_of(${1:<victim>})$0");

				const is_elite = new vscode.CompletionItem("is_elite", vscode.CompletionItemKind.Function)
				is_elite.insertText = new vscode.SnippetString("is_elite()$0");

				const is_fireteam_leader = new vscode.CompletionItem("is_fireteam_leader", vscode.CompletionItemKind.Function)
				is_fireteam_leader.insertText = new vscode.SnippetString("is_fireteam_leader()$0");

				const is_monitor = new vscode.CompletionItem("is_monitor", vscode.CompletionItemKind.Function)
				is_monitor.insertText = new vscode.SnippetString("is_monitor()$0");
				
				const is_not_respawning = new vscode.CompletionItem("is_not_respawning", vscode.CompletionItemKind.Function)
				is_not_respawning.insertText = new vscode.SnippetString("is_not_respawning()$0");

				const is_spartan = new vscode.CompletionItem("is_spartan", vscode.CompletionItemKind.Function)
				is_spartan.insertText = new vscode.SnippetString("is_spartan()$0");

				const killer_type_is = new vscode.CompletionItem("killer_type_is", vscode.CompletionItemKind.Function)
				killer_type_is.insertText = new vscode.SnippetString("killer_type_is(${1|<types>,guardians,suicide,kill,betrayal,quit|}$0)");

				const add_weapon = new vscode.CompletionItem("add_weapon", vscode.CompletionItemKind.Function)
				add_weapon.insertText = new vscode.SnippetString("add_weapon(${1:<weapon>})$0");

				const apply_traits = new vscode.CompletionItem("apply_traits", vscode.CompletionItemKind.Function)
				apply_traits.insertText = new vscode.SnippetString("apply_traits(${1:<traits>})$0");

				const force_into_vehicle = new vscode.CompletionItem("force_into_vehicle", vscode.CompletionItemKind.Function)
				force_into_vehicle.insertText = new vscode.SnippetString("force_into_vehicle(${1:<vehicle>})");

				const get_crosshair_target = new vscode.CompletionItem("get_crosshair_target", vscode.CompletionItemKind.Function)
				get_crosshair_target.insertText = new vscode.SnippetString("get_crosshair_target()$0");

				const get_fireteam = new vscode.CompletionItem("get_fireteam", vscode.CompletionItemKind.Function)
				get_fireteam.insertText = new vscode.SnippetString("get_fireteam()$0");

				const get_scoreboard_pos = new vscode.CompletionItem("get_scoreboard_pos", vscode.CompletionItemKind.Function)
				get_scoreboard_pos.insertText = new vscode.SnippetString("get_scoreboard_pos()$0");

				const get_spree_count = new vscode.CompletionItem("get_spree_count", vscode.CompletionItemKind.Function)
				get_spree_count.insertText = new vscode.SnippetString("get_spree_count()$0");

				const set_biped = new vscode.CompletionItem("set_biped", vscode.CompletionItemKind.Function)
				set_biped.insertText = new vscode.SnippetString("set_biped(${1:<biped>})$0");

				const set_co_op_spawning = new vscode.CompletionItem("set_co_op_spawning", vscode.CompletionItemKind.Function)
				set_co_op_spawning.insertText = new vscode.SnippetString("set_co_op_spawning(${1|<enable>,true,false|})$0");

				const set_fireteam = new vscode.CompletionItem("set_fireteam", vscode.CompletionItemKind.Function)
				set_fireteam.insertText = new vscode.SnippetString("set_fireteam(${1:<index>})$0");

				const set_loadout_palette = new vscode.CompletionItem("set_loadout_palette", vscode.CompletionItemKind.Function)
				set_loadout_palette.insertText = new vscode.SnippetString("set_loadout_palette(${1|<palette>,none,spartan_tier_1,spartan_tier_2,spartan_tier_3,elite_tier_1,elite_tier_2,elite_tier_3|})$0");

				const set_primary_respawn_object = new vscode.CompletionItem("set_primary_respawn_object", vscode.CompletionItemKind.Function)
				set_primary_respawn_object.insertText = new vscode.SnippetString("set_primary_respawn_object(${1:<respawn>})");

				const set_round_card_icon = new vscode.CompletionItem("set_round_card_icon", vscode.CompletionItemKind.Function)
				set_round_card_icon.insertText = new vscode.SnippetString("set_round_card_icon(${1|<icon>,none,speaker,dead_teammate_marker,lightning_bolt,bullseye,diamond,bomb,flag,skull,crown,vip,padlock,territory_a,territory_b,territory_c,territory_d,territory_e,territory_f,terrtory_g,territory_h,territory_i,supply,supply_health,supply_air_drop,supply_ammo,arrow,defend,ordnance,inward|})$0");

				const set_round_card_text = new vscode.CompletionItem("set_round_card_text", vscode.CompletionItemKind.Function)
				set_round_card_text.insertText = new vscode.SnippetString("set_round_card_text(${1:<text>})$0");

				const set_round_card_title = new vscode.CompletionItem("set_round_card_title", vscode.CompletionItemKind.Function)
				set_round_card_title.insertText = new vscode.SnippetString("set_round_card_title(${1:<text>})$0");

				const try_get_armor_ability = new vscode.CompletionItem("try_get_armor_ability", vscode.CompletionItemKind.Function)
				try_get_armor_ability.insertText = new vscode.SnippetString("try_get_armor_ability()$0");

				const get_armor_ability = new vscode.CompletionItem("get_armor_ability", vscode.CompletionItemKind.Function)
				get_armor_ability.insertText = new vscode.SnippetString("get_armor_ability()$0");

				const try_get_death_damage_mod = new vscode.CompletionItem("try_get_death_damage_mod", vscode.CompletionItemKind.Function)
				try_get_death_damage_mod.insertText = new vscode.SnippetString("try_get_death_damage_mod()$0");

				const get_death_damage_mod = new vscode.CompletionItem("get_death_damage_mod", vscode.CompletionItemKind.Function)
				get_death_damage_mod.insertText = new vscode.SnippetString("get_death_damage_mod()$0");

				const try_get_death_damage_type = new vscode.CompletionItem("try_get_death_damage_type", vscode.CompletionItemKind.Function)
				try_get_death_damage_type.insertText = new vscode.SnippetString("try_get_death_damage_type()$0");

				const get_death_damage_type = new vscode.CompletionItem("get_death_damage_type", vscode.CompletionItemKind.Function)
				get_death_damage_type.insertText = new vscode.SnippetString("get_death_damage_type()$0");

				const try_get_killer = new vscode.CompletionItem("try_get_killer", vscode.CompletionItemKind.Function)
				try_get_killer.insertText = new vscode.SnippetString("try_get_killer()$0");

				const get_killer = new vscode.CompletionItem("get_killer", vscode.CompletionItemKind.Function)
				get_killer.insertText = new vscode.SnippetString("get_killer()$0");

				const try_get_vehicle = new vscode.CompletionItem("try_get_vehicle", vscode.CompletionItemKind.Function)
				try_get_vehicle.insertText = new vscode.SnippetString("try_get_vehicle()$0");

				const get_vehicle = new vscode.CompletionItem("get_vehicle", vscode.CompletionItemKind.Function)
				get_vehicle.insertText = new vscode.SnippetString("get_vehicle()$0");

				const try_get_weapon = new vscode.CompletionItem("try_get_weapon", vscode.CompletionItemKind.Function)
				try_get_weapon.insertText = new vscode.SnippetString("try_get_weapon()$0");

				const get_weapon = new vscode.CompletionItem("get_weapon", vscode.CompletionItemKind.Function)
				get_weapon.insertText = new vscode.SnippetString("get_weapon()$0");

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('player.') && !/player\[[0-9]\]./.test(linePrefix)) {
					return undefined;
				}

				return [
					num,
					obj,
					player,
					team,
					timer,
					new vscode.CompletionItem("biped", vscode.CompletionItemKind.Property),
					new vscode.CompletionItem("rating", vscode.CompletionItemKind.Property),
					new vscode.CompletionItem("score", vscode.CompletionItemKind.Property),
					script_stat,
					new vscode.CompletionItem("team", vscode.CompletionItemKind.Property),
					new vscode.CompletionItem("frag_grenades", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("plasma_grenades", vscode.CompletionItemKind.Method),
					assisted_kill_of,
					is_elite,
					is_fireteam_leader,
					is_monitor,
					is_not_respawning,
					is_spartan,
					killer_type_is,
					add_weapon,
					apply_traits,
					force_into_vehicle,
					get_crosshair_target,
					get_fireteam,
					get_scoreboard_pos,
					get_spree_count,
					set_biped,
					set_co_op_spawning,
					set_fireteam,
					set_loadout_palette,
					set_primary_respawn_object,
					set_round_card_icon,
					set_round_card_text,
					set_round_card_title,
					try_get_armor_ability,
					get_armor_ability,
					try_get_death_damage_mod,
					get_death_damage_mod,
					try_get_death_damage_type,
					get_death_damage_type,
					try_get_killer,
					get_killer,
					try_get_vehicle,
					get_vehicle,
					try_get_weapon,
					get_weapon
				];
			}
		},
		'.'
	);

	const typeTeam = vscode.languages.registerCompletionItemProvider(
		'rvt',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {


				const num = new vscode.CompletionItem("number", vscode.CompletionItemKind.Variable)
				num.insertText = new vscode.SnippetString("number[${1:n}]$0");

				const obj = new vscode.CompletionItem("object", vscode.CompletionItemKind.Variable)
				obj.insertText = new vscode.SnippetString("object[${1:n}]$0");

				const player = new vscode.CompletionItem("player", vscode.CompletionItemKind.Variable)
				player.insertText = new vscode.SnippetString("player[${1:n}]$0");

				const team = new vscode.CompletionItem("team", vscode.CompletionItemKind.Variable)
				team.insertText = new vscode.SnippetString("team[${1:n}]$0");
				
				const timer = new vscode.CompletionItem("timer", vscode.CompletionItemKind.Variable)
				timer.insertText = new vscode.SnippetString("timer[${1:n}]$0");

				const script_stat = new vscode.CompletionItem("script_stat", vscode.CompletionItemKind.Property)
				script_stat.insertText = new vscode.SnippetString("script_stat[${1:n}]");

				const has_alliance_status = new vscode.CompletionItem("has_alliance_status", vscode.CompletionItemKind.Function)
				has_alliance_status.insertText = new vscode.SnippetString("has_alliance_status(${1:<other>}, ${2|<status>,friendly,neutral,enemy|})$0");

				const has_any_players = new vscode.CompletionItem("has_any_players", vscode.CompletionItemKind.Function)
				has_any_players.insertText = new vscode.SnippetString("has_any_players()$0");

				const get_scoreboard_pos = new vscode.CompletionItem("get_scoreboard_pos", vscode.CompletionItemKind.Function)
				get_scoreboard_pos.insertText = new vscode.SnippetString("get_scoreboard_pos()$0");

				const set_co_op_spawning = new vscode.CompletionItem("set_co_op_spawning", vscode.CompletionItemKind.Function)
				set_co_op_spawning.insertText = new vscode.SnippetString("set_co_op_spawning(${1|<enable>,true,false|})$0");

				const set_primary_respawn_object = new vscode.CompletionItem("set_primary_respawn_object", vscode.CompletionItemKind.Function)
				set_primary_respawn_object.insertText = new vscode.SnippetString("set_primary_respawn_object(${1:<respawn>})");

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('team.') && !/team\[[0-9]\]./.test(linePrefix)) {
					return undefined;
				}

				return [
					num,
					obj,
					player,
					team,
					timer,
					new vscode.CompletionItem("score", vscode.CompletionItemKind.Property),
					script_stat,
					has_alliance_status,
					has_any_players,
					get_scoreboard_pos,
					set_co_op_spawning,
					set_primary_respawn_object
				];
			}
		},
		'.'
	);

	const typeTimer = vscode.languages.registerCompletionItemProvider(
		'rvt',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const is_zero = new vscode.CompletionItem("is_zero", vscode.CompletionItemKind.Function)
				is_zero.insertText = new vscode.SnippetString("is_zero()$0");

				const reset = new vscode.CompletionItem("reset", vscode.CompletionItemKind.Function)
				reset.insertText = new vscode.SnippetString("reset()$0");

				const set_rate = new vscode.CompletionItem("set_rate", vscode.CompletionItemKind.Function)
				set_rate.insertText = new vscode.SnippetString("set_rate(${1|<rate>,-1000%,-500%,-400%,-300%,-200%,-175%,-150%,-125%,-100%,-75%,-50%,-25%,-10%,0%,10%,25%,50%,75%,100%,125%,150%,175%,200%,300%,400%,500%,1000%|})$0");

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('timer.') && !/timer\[[0-9]\]./.test(linePrefix)) {
					return undefined;
				}

				return [
					is_zero,
					reset,
					set_rate
				];
			}
		},
		'.'
	);

	context.subscriptions.push(defaultProvider, namespaceGame, globalVariables, typeObject, typePlayer, typeTeam, typeTimer);
}
