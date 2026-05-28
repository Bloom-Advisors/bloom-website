export const caseStudiesData = [
  {
    id: 1,
    sector: 'Energy and Utilities',
    situation: 'An energy business needs to model multi-quarter cash flow across several business units, with actuals automatically feeding from Business Central into the forecast model.',
    enables: 'A Solver-based forecasting model integrating live BC financial data with projected budgets. Finance teams move from monthly spreadsheet reconciliation to automated actuals versus forecast reporting, with executive dashboards showing performance by business unit in real time.',
    deliveredProject: {
      hasProject: true,
      meta: 'Energy | Forecasting | Nov 2025',
      title: 'Financial Forecasting and Reporting Solution',
      desc: 'Delivered a six-quarter forecasting solution using Solver, integrating Business Central financials with projected budgets across business units. Built planning templates surfacing actuals versus forecast at executive level and established data validation workflows that materially improved forecast accuracy.',
      outcome: 'Replaced manual monthly reconciliation with automated forecast versus actuals reporting across all business units.'
    },
    image: '/energy_bg.png',
  },
  {
    id: 2,
    sector: 'Construction and Project Services',
    situation: 'A project-based contractor discovers cost overruns only at project close because there is no system tracking actuals against the job budget during delivery. Subcontractor costs, materials, and variations are managed across spreadsheets with no consolidated view of profitability until the job is finished.',
    enables: 'Job costing and WIP reporting modules configured in Business Central give project managers and finance real-time visibility into spend, committed costs, and forecast-to-complete on every live job. Subcontractor purchase orders, variations, and billing are unified in one system, with Power BI dashboards surfacing profitability by project, phase, and team.',
    deliveredProject: {
      hasProject: false,
      text: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.'
    },
    image: '/construction_bg.png',
  },
  {
    id: 3,
    sector: 'Distribution and Logistics',
    situation: 'A distribution business manages purchasing, inventory, and customer billing across separate systems with no consolidated view of margin by route, customer, or product line. Finance closes late every month because data has to be pulled and reconciled manually before the numbers are meaningful.',
    enables: 'Business Central unifies purchasing, inventory, and sales into a single system. Automated ETL pipelines feed Power BI dashboards with real-time margin by customer, route, and product line. Finance teams move from manual month-end reconciliation to always-on financial visibility, with cashflow forecasting built on live actuals in Solver xFP&A.',
    deliveredProject: {
      hasProject: false,
      text: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.'
    },
    image: '/logistics_bg.png',
  },
  {
    id: 4,
    sector: 'Manufacturing and Engineering',
    situation: 'A manufacturer is managing bills of materials, production scheduling, purchasing, and sales in disconnected systems. There is no real-time view of production costs against budget, and margin by product line only becomes visible at month-end when it is too late to act.',
    enables: 'Business Central manufacturing modules bring BOM management, production orders, and purchasing into one system. Job costing tracks actual production costs against standard costs in real time, with Power BI dashboards showing margin by product line, supplier performance, and inventory turnover. ERP data migration from legacy manufacturing systems is handled with full data mapping and validation before go-live.',
    deliveredProject: {
      hasProject: false,
      text: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.'
    },
    image: '/manufacturing_bg.png',
  },
  {
    id: 5,
    sector: 'Retail and Consumer',
    situation: 'A retail business holds inventory data in one system, sales in another, and purchasing in a spreadsheet. There is no reliable view of margin by product or channel, and buying decisions are made on data that is weeks out of date.',
    enables: 'Business Central unifies inventory, purchasing, and sales data across all channels. Power BI dashboards track sell-through rates, margin by SKU, and supplier performance in one view. Buying and finance teams gain real-time visibility into stock availability, reorder positions, and channel-level profitability without manual data consolidation.',
    deliveredProject: {
      hasProject: false,
      text: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.'
    },
    image: '/retail_bg.png',
  }
];
