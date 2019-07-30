import React, { Component } from 'react';
import "./index.scss"
class Zback extends Component {
	constructor() {
		super()
		this.state = {
			arr: [1, 2, 3, 4, 5]
		}
	}
	componentDidMount() {
		this.refs.a0.className = "zback-content-li bclick"
	}
	abnav = (a) => {
		var c = this.state.arr.length
		for (var i = 0; i < c; i++) {
			var b = "a" + i
			this.refs[b].className = "zback-content-li"
		}
		var b = "a" + a
		this.refs[b].className = "zback-content-li bclick"
		console.log(this.refs[b].innerHtml)
	}
	render() {
		const {
			arr
		} = this.state
		return (
			<div style={{ width: 200, height: 315, background: "rgba(250,250,250,1)", margin: "20px" }} className="clear">
				<input type="text" className="zback-header-inp" />
				<p className="zback-content-p clear">
					<span className="span1">合约</span>
					<span className="span2">涨幅</span>
				</p>
				<div>
					{
						arr.map((item, index) => {
							return (
								<div className="zback-content-li"
									ref={"a" + index}
									onClick={() => this.abnav(index)}
									key={item + index}>
									BTC永续
									<span className="span2">-0.72%</span>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default Zback;