import React from "react";
import { DashboardCard } from "../components/DashboardCard";
import { DashboardTitleCard } from "../components/DashboardTitleCard";
import { DashboardCardsData } from "../utils/mockData";

export const SampleDashboard = () => {
  const submissionsRawData = [];
  return (
    <div
      style={{
        display: "flex",
        gridGap: 8,
        flexDirection: "column",
        padding: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          gridGap: 8,
          flexFlow: "wrap",
        }}
      >
        <DashboardTitleCard
          title="Production KPIs"
          pathName="/productionKPIs"
        />
        {DashboardCardsData.productionKPIs.map(({ type, title, middleText, bottomText, bottomPercentage }) => 
          <DashboardCard
            type={type}
            title={title}
            middleText={middleText}
            bottomText={bottomText}
            bottomPercentage={bottomPercentage}
            rawData={submissionsRawData}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          gridGap: 8,
          flexFlow: "wrap",
        }}
      >
        <DashboardTitleCard title="Claim KPIs" pathName="/claimKPIs" />
        {DashboardCardsData.claimsKPIs.map(({ type, title, middleText, bottomText, bottomPercentage }) => 
          <DashboardCard
            type={type}
            title={title}
            middleText={middleText}
            bottomText={bottomText}
            bottomPercentage={bottomPercentage}
            rawData={submissionsRawData}
          />
        )}
      </div>
    </div>
  );
};
