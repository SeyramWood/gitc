import React from "react";

import { Card } from "../../../components/common";
import { Dashboard, DashboardCTACard } from "../../../components/layouts/dashboard/";

const Index = ({ count }) => {
    return (
        <Dashboard page="Dashboard">
            <div className="dashboard__top">
                <div className="s__row">
                    <div className="s__col c--3">
                        <Card>
                            <DashboardCTACard
                                label="Publications"
                                value={`${count?.publications || 0}`}
                                icon="pi-globe"
                                iconColor="blue"
                                subValue=""
                                subText=""
                            />
                        </Card>
                    </div>
                    <div className="s__col c--3">
                        <Card>
                            <DashboardCTACard
                                label="Cases"
                                value={`${count?.cases || 0}`}
                                icon="pi-file"
                                iconColor="orange"
                                subValue=""
                                subText=""
                            />
                        </Card>
                    </div>
                    <div className="s__col c--3">
                        <Card>
                            <DashboardCTACard
                                label="Albums"
                                value={`${count?.albums || 0}`}
                                icon="pi-images"
                                iconColor="seablue"
                                subValue=""
                                subText=""
                            />
                        </Card>
                    </div>
                    <div className="s__col c--3">
                        <Card>
                            <DashboardCTACard
                                label="Users"
                                value={`${count?.users || 0}`}
                                icon="pi-users"
                                iconColor="indigo"
                                subValue=""
                                subText=""
                            />
                        </Card>
                    </div>
                </div>
            </div>
            {/* <div className="dashboard__main">
                <div className="s__row">
                    <div className="s__col c--6">
                        <div className="s__row">
                            <div className="s__col c--12">
                                <Card label="Recent Sales">
                                    <div className="recent__sales">
                                        <RecentSale />
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <Card label="best selling products">
                                    <div className="best__selling__products">
                                        <BestSellingProduct
                                            name="mango"
                                            category="fruits"
                                            value={59}
                                            color="green"
                                        />
                                        <BestSellingProduct
                                            name="pepper"
                                            category="vegetables"
                                            value={73}
                                            color="indigo"
                                        />
                                        <BestSellingProduct
                                            name="yam"
                                            category="root & tubers"
                                            value={65}
                                            color="orangered"
                                        />
                                        <BestSellingProduct
                                            name="pear"
                                            category="fruits"
                                            value={10}
                                            color="blue"
                                        />
                                        <BestSellingProduct
                                            name="cassava"
                                            category="root & tubers"
                                            value={93}
                                            color="brown"
                                        />
                                        <BestSellingProduct
                                            name="maize"
                                            category="cereal"
                                            value={81}
                                            color="darkgoldenrod"
                                        />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div className="s__col c--6">
                        <div className="s__row">
                            <div className="s__col c--6">
                                <Card>
                                    <DashboardCTACard
                                        label="Orders"
                                        value="300"
                                        icon="pi-shopping-cart"
                                        iconColor="yellow"
                                        subValue="120"
                                        subText="since last visit"
                                    />
                                </Card>
                            </div>
                            <div className="s__col c--6">
                                <Card>
                                    <DashboardCTACard
                                        label="Revenue"
                                        value="GHS 2500"
                                        icon="pi-briefcase"
                                        iconColor="green"
                                        subValue="%52+"
                                        subText="since last week"
                                    />
                                </Card>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <Card label="Orders Overview">
                                    <div className="line__chart">
                                        <LineChart />
                                    </div>
                                </Card>
                            </div>
                        </div>

                        <div className="s__row">
                            <div className="s__col c--12">
                                <Card label="Sales Overview">
                                    <div className="line__chart">
                                        <LineChart type="area" />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </Dashboard>
    );
};

export default Index;
