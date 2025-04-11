// import { Column, Line } from '@ant-design/plots';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
//
// const GitHubCommitsGraph: React.FC = () => {
//   const [dailyData, setDailyData] = useState<
//     { date: string; contributionCount: number }[]
//   >([]);
//   const [yearlyData, setYearlyData] = useState<
//     { year: string; totalCommits: number }[]
//   >([]);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
//       const USERNAME = 'jiyemun';
//
//       if (!GITHUB_TOKEN) {
//         console.error('❌ GitHub Token이 설정되지 않았습니다.');
//         return;
//       }
//
//       let allCommits: { date: string; contributionCount: number }[] = [];
//       let yearlyCommits: Record<string, number> = {};
//
//       for (let year = 2022; year <= 2024; year++) {
//         const fromDate = `${year}-01-01T00:00:00Z`;
//         const toDate = `${year}-12-31T23:59:59Z`;
//
//         const query = {
//           query: `
//             {
//               user(login: "${USERNAME}") {
//                 contributionsCollection(from: "${fromDate}", to: "${toDate}") {
//                   contributionCalendar {
//                     weeks {
//                       contributionDays {
//                         date
//                         contributionCount
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           `,
//         };
//
//         try {
//           const response = await axios.post(
//             'https://api.github.com/graphql',
//             JSON.stringify(query),
//             {
//               headers: {
//                 Authorization: `Bearer ${GITHUB_TOKEN}`,
//                 'Content-Type': 'application/json',
//               },
//             },
//           );
//
//           const weeks =
//             response.data.data.user.contributionsCollection.contributionCalendar
//               .weeks;
//           if (!weeks) throw new Error('❌ 예상과 다른 API 응답.');
//
//           // 날짜별 커밋 데이터 변환
//           const commitsData = weeks.flatMap(
//             (week: any) => week.contributionDays,
//           );
//           allCommits = [...allCommits, ...commitsData];
//
//           // 년도별 커밋 수 계산
//           commitsData.forEach(({ date, contributionCount }) => {
//             yearlyCommits[year] =
//               (yearlyCommits[year] || 0) + contributionCount;
//           });
//         } catch (error: any) {
//           console.error(
//             `🚨 ${year}년 데이터 가져오기 실패:`,
//             error.response?.data || error,
//           );
//         }
//       }
//
//       // 상태 업데이트
//       setDailyData(allCommits);
//       setYearlyData(
//         Object.entries(yearlyCommits).map(([year, totalCommits]) => ({
//           year,
//           totalCommits,
//         })),
//       );
//     };
//
//     fetchData();
//   }, []);
//
//   // 📌 날짜별 커밋 그래프 설정 (Line 차트)
//   const dailyConfig = {
//     data: dailyData,
//     xField: 'date',
//     yField: 'contributionCount',
//     smooth: true,
//     point: { size: 5, shape: 'circle' },
//     tooltip: {
//       formatter: (datum: any) => ({
//         name: '커밋 수',
//         value: datum.contributionCount,
//       }),
//     },
//   };
//
//   // 📌 년도별 커밋 그래프 설정 (Column 차트)
//   const yearlyConfig = {
//     data: yearlyData,
//     xField: 'year',
//     yField: 'totalCommits',
//     columnWidthRatio: 0.6,
//     tooltip: {
//       formatter: (datum: any) => ({
//         name: '총 커밋 수',
//         value: datum.totalCommits,
//       }),
//     },
//   };
//
//   return (
//     <div>
//       <h2>📊 GitHub 커밋 그래프</h2>
//       <Line {...dailyConfig} />
//       <h2>📆 년도별 커밋 수</h2>
//       <Column {...yearlyConfig} />
//     </div>
//   );
// };
//
// export default GitHubCommitsGraph;
