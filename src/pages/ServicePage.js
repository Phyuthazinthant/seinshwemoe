import React, { Component } from 'react'
import round from 'round-to'
import MMText from 'react-mm-text'
import lan from '../configs/Language'
import ShopContant from '../features/home/components/shop_contant'


export default class ServicePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            kyat: "",
            pae: "",
            ywae: "",
            gram: "",
            ans: "",
            priceLable: ""
        }
    }
    _handleInputsChanged = stateData => {
        if (Object.keys(stateData).toString() !== "tdygold") 
            this.setState({ priceLable: "ရွှေဈေး" })
            this.setState(stateData)
    }
    _handleInputsChangedGram = stateData => {
        if (parseInt(Object.values(stateData)) !== 0) 
            this.setState({ priceLable: "၁ ဂရမ္ေစ်း" })
            this.setState(stateData)
    }

    onCalculateClick = () => {
        const { kyat, pae, ywae, tdygold, gram } = this.state;
        let k, k1, ky, p, p1, y, ya;
        if (gram === "" || parseInt(gram) === 0) {
            if (ywae === "") p = 0;
            else p = ywae / 7.5;


            if (pae === "") p1 = p;
            else p1 = p + parseFloat(pae);
            k = p1 / 16;

            if (kyat === "") { k1 = k; }
            else k1 = k + parseFloat(kyat)

            let total = k1 * tdygold;
            let g = k1 * 16.6;
            this.setState({ ans: round.up(total, -2), gram: round.up(g, 2) })
        }
        else {
            k = gram / 16.6;
            if (1 - (k % 1) < 0.01) {
                ky = round(k, 0)
                p = 0; y = 0;
            }
            else {
                ky = round.down(k, 0)
                p = ((gram % 16.6) / 16.6) * 16;
                y = (p % 1) * 7.5;
            }

            let total = gram * tdygold;
            if (round(y, 2) > 0.25 && round(y, 2) < 0.75) ya = 0.5
            else if (round(y, 2) > 0.1 && round(y, 2) <= 0.25) ya = 0.25
            else ya = round(y, 2)
            this.setState({ ans: round.up(total, -2), kyat: ky, pae: round.down(p, 0), ywae: ya })
        }

    }

    onClearData = () => {
        this.setState({
            kyat: "",
            pae: "",
            ywae: "",
            tdygold: "",
            gram: "",
            ans: ""
        })
    }



    render() {
        const clan = "mm"

        const { kyat, pae, ywae, tdygold, gram } = this.state

        return (

            <div className="container">
                <div class="bg-light b-0 pt-1 text-center">
                    <div className=" font-weight-bold">
                        <MMText
                            text="၁ကျပ်သားတွင် ၁၆.၆ ဂရမ်ဖြင့် တွက်ထားပါသည်။"
                            showFont={"unicode"}
                            conveter={"rabbit"}
                            detector={"knayi"}

                        />
                    </div>


                    <form className="form mt-3" >
                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label class="col-xs-3 col-sm-4 col-lg-2">
                                <MMText
                                    text="ကျပ်"
                                    showFont={"unicode"}
                                    conveter={"rabbit"}
                                    detector={"knayi"}
                                />
                            </label>
                            <div className="col-xs-6 col-sm-4  col-lg-3">
                                <input type="number" className="form-control" value={kyat} min="0" onChange={(e) => this._handleInputsChanged({ kyat: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label class="col-xs-3 col-sm-4 col-lg-2">
                                <MMText
                                    text="ပဲ"
                                    showFont={"unicode"}
                                    conveter={"rabbit"}
                                    detector={"knayi"}
                                />
                            </label>
                            <div className="col-xs-6  col-sm-4  col-lg-3">
                                <input type="number" className="form-control" min="0" value={pae} onChange={(e) => this._handleInputsChanged({ pae: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label class="col-xs-3 col-sm-4 col-lg-2">
                                <MMText
                                    text="ရွေး"
                                    showFont={"unicode"}
                                    conveter={"rabbit"}
                                    detector={"knayi"}
                                />
                            </label>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <input type="number" className="form-control" min="0" value={ywae} onChange={(e) => this._handleInputsChanged({ ywae: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label class="col-xs-3 col-sm-4  col-lg-2">
                                <MMText
                                    text="ဂရမ်"
                                    showFont={"unicode"}
                                    conveter={"rabbit"}
                                    detector={"knayi"}
                                />
                            </label>
                            <div className="col-xs-6 col-sm-4  col-lg-3">
                                <input type="number" className="form-control" min="0" value={gram} onChange={(e) => this._handleInputsChangedGram({ gram: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label className="col-xs-3 col-sm-4  col-lg-2">
                                <MMText
                                    text="ရွှေဈေး"
                                    showFont={"unicode"}
                                    conveter={"rabbit"}
                                    detector={"knayi"}
                                />
                            </label>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <input type="number" className="form-control" min="0" value={tdygold} placeholder="MMK" onChange={(e) => this._handleInputsChanged({ tdygold: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label className="col-xs-1 col-sm-4 col-lg-2"></label>
                            <div className="col-xs-6 col-sm-4  col-lg-3">
                                <button type="button" className="btn btn-warning bg-warning form-control" onClick={this.onCalculateClick.bind(this)} >Calculate</button>
                            </div>
                        </div>
                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label className="col-xs-1 col-sm-4 col-lg-2"></label>
                            <div className="col-xs-6 col-sm-4  col-lg-3">
                                <button type="button" className="btn btn-warning bg-warning form-control" onClick={this.onClearData.bind(this)} >Clear</button>
                            </div>
                        </div>

                        <div className="form-group d-flex flex-wrap justify-content-center ">
                            <label for="colFormLabelLg" class="col-xs-3 col-sm-4  col-lg-3">
                                <MMText
                                    text="စုစုပေါင်းကျသင့်ငွေ"
                                    showFont={"unicode"}
                                    conveter={"rabbit"}
                                    detector={"knayi"}
                                />
                            </label>
                            <div className="col-xs-6 col-sm-4  col-lg-3">
                                <span>{this.state.ans} &nbsp;MMK </span>
                            </div>
                        </div>
                    </form>
                </div>

                < ShopContant />

            </div>

        )
    }
}




