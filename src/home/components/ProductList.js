import React from 'react'

function ProductList() {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th colspan="5" class="table-warning">ရွှေအရည်အသွေး</th>
                    </tr>
                    <tr>
                        <th scope="col">Karat</th>
                        <th scope="col">Purity</th>
                        <th scope="col">မြန်မာ့ရွှေအရည်သွေး</th>
                        <th scope="col">Pure Gold</th>
                        <th scope="col">Other Metal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">24</th>
                        <td>1000</td>
                        <td>၁၆ပဲရည်</td>
                        <td>100%</td>
                        <td>Nil</td>
                    </tr>
                    <tr>
                        <th scope="row">22</th>
                        <td>916</td>
                        <td>၁၄ပဲရည်</td>
                        <td>91.6%</td>
                        <td>8.5%</td>
                    </tr>
                    <tr>
                        <th scope="row">18</th>
                        <td>750</td>
                        <td>၁၂ပဲရည်</td>
                        <td>75%</td>
                        <td>25%</td>
                    </tr>
                    <tr>
                        <th scope="row">14</th>
                        <td>585</td>
                        <td>၉ပဲရည်</td>
                        <td>58.5%</td>
                        <td>41.5%</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>500</td>
                        <td>8ပဲရည်</td>
                        <td>50%</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>374</td>
                        <td>၆ပဲရည်</td>
                        <td>37.4%</td>
                        <td>62.2%</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>333</td>
                        <td>5ပဲရည်</td>
                        <td>33.3%</td>
                        <td>66.6%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
