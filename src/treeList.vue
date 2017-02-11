
<!-- <template>
	<ul class="list">
		<li v-for="(option,index) in options" class="itm" :id="option.id" @click.stop="selectOption(option)" :class="{active: root.selected === option, disabled: option.disabled}">
			<span class="txt">{{option.name}}</span>
			<i class="u-icon-tickblue"></i>
			<sf-tree-list v-if="option.children && option.children.length" :options="option.children" :root="root"></sf-tree-list>
		</li>
	</ul>
</template> -->

<style type="text/css" lang="sass" scoped>
	.list{
		position: relative;
		max-height: 300px;
		overflow: hidden;
	}
	.itm{
		padding: 8px 10px;
		box-sizing: border-box;
		overflow: hidden;
		word-wrap: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
		.txt{
			display: inline-block;
			vertical-align: middle;
		}
		.u-icon-tickblue{
			display: none;
			width: 14px;
			height: 14px;
			margin-left: 5px;
			vertical-align: middle;
			background: url(/docs/res/img/icon-14.png);
			background-size: 120px auto;
			background-position: 0 -570px;
		}
		&.active>.u-icon-tickblue{
			display: inline-block;
		}
		&.disabled{
			color: #999;
			background: #eee;
			cursor: not-allowed;
		}
	}
</style>
<script type="text/javascript">
	export default {
		name: 'sf-tree-list',
		componentName: 'treeList',
		components: {

		},
		computed: {

		},
		props: {
			options: Array,
			root: Object,
			customRender: Function
		},
		data() {
			return {};
		},
		methods: {
			selectOption(option, event) {
				event.stopPropagation();
				if(option.disabled) return;
				this.root.$emit('selectOption', option);
			}
		},
		created() {
			this.$options.render = function (h) {
				let optionRender;
				if (!!this.customRender) {
					optionRender = function (_h) {
						return this.options.map(option =>
							<li id={option.id} on-click={this.selectOption.bind(this, option)} class={{itm: true, active: this.root.selected === option, disabled: option.disabled}}>
								{ this.customRender.call({ option: option }, _h) }
								{
									(option.children && option.children.length) ?
									<sf-tree-list options={option.children} root={this.root} customRender={this.customRender}></sf-tree-list> : ''
								}
							</li>
						)
					}
				}else {
					optionRender = function (_h) {
						return this.options.map(option =>
							<li class="itm" id={option.id} on-click={this.selectOption.bind(this, option)} class={{itm: true, active: this.root.selected === option, disabled: option.disabled}}>
								<span class="txt">{option.name}</span>
								<i class="u-icon-tickblue"></i>
								{
									(option.children && option.children.length) ?
									<sf-tree-list options={option.children} root={this.root}></sf-tree-list> : ''
								}
							</li>
						)
					}
				}
				let newRender = function (_h) {
					return (
						<ul class="list">
							{ optionRender.call(this, _h) }
						</ul>
					)
				}
				return newRender.call(this._renderProxy, h)
			}
		}
	}
</script>