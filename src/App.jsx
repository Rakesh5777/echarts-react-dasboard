import './App.css'
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

function App() {
  const [xAxisData, setXAxisData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const data = {
      "xAxisData": [
        "2024-03-01",
        "2024-03-02",
        "2024-03-03",
        "2024-03-04",
        "2024-03-05",
        "2024-03-06",
        "2024-03-07",
        "2024-03-08",
        "2024-03-09",
        "2024-03-10",
        "2024-03-11",
        "2024-03-12",
        "2024-03-13",
        "2024-03-14",
        "2024-03-15",
        "2024-03-16",
        "2024-03-17",
        "2024-03-18",
        "2024-03-19",
        "2024-03-20",
        "2024-03-21",
        "2024-03-22",
        "2024-03-23",
        "2024-03-24",
        "2024-03-25",
        "2024-03-26",
        "2024-03-27",
        "2024-03-28",
        "2024-03-29",
        "2024-03-30",
        "2024-03-31"
      ],
      "graphData": [
        {
          "data": [
            "0.0000007097",
            "0.0000010797",
            "0.0000012771",
            "87.9747932092",
            "22.3648631198",
            "147.8370636267",
            "40.4256081124",
            "31.628321919",
            "0.0000011318",
            "0.000000689",
            "0.0000009013",
            "15.040984127",
            "0.0752289294",
            "0.0000005426",
            "50.8927416001",
            "0.0000005204",
            "14.9337995453",
            "38.1960452575",
            "148.5956974081",
            "275.6203726049",
            "258.4120306754",
            "258.4122461129",
            "258.4120877188",
            "367.9566653967",
            "247.4962400235",
            "21.1021851289",
            "1.1782012729",
            "0.7593514775",
            "0.0000004889",
            "0.0000004691",
            "0.0021603281"
          ],
          "stack": "A",
          "type": "bar",
          "name": "EC2-Instances($)"
        },
        {
          "data": [
            "448.86",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "stack": "A",
          "type": "bar",
          "name": "Tax($)"
        },
        {
          "data": [
            "15.4663204563",
            "15.4663206374",
            "15.466320729",
            "22.9024442592",
            "11.9324711606",
            "17.764619572",
            "14.6783993205",
            "12.7364509488",
            "9.7889013018",
            "9.7889010692",
            "9.7889011794",
            "11.6076766997",
            "10.1212773905",
            "9.7889009949",
            "14.8215402961",
            "9.7889009926",
            "13.3058322206",
            "15.7937570197",
            "14.5102307497",
            "17.6469374111",
            "15.6163981377",
            "15.6417443915",
            "15.6361150638",
            "15.6168503335",
            "15.525274565",
            "12.4341053935",
            "9.6125379741",
            "7.4600092357",
            "7.4539332511",
            "7.4539332118",
            "7.4550481201"
          ],
          "stack": "A",
          "type": "bar",
          "name": "EC2-Other($)"
        },
        {
          "data": [
            "358.9095007616",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "stack": "A",
          "type": "bar",
          "name": "Support (Business)($)"
        },
        {
          "data": [
            "4.2001854663",
            "4.200185012",
            "4.2001849467",
            "4.5704802121",
            "4.3343863884",
            "4.886061892",
            "4.3782325183",
            "4.4745963631",
            "4.2001810772",
            "4.2001814836",
            "4.2001817098",
            "4.2910046586",
            "4.3906590529",
            "4.68018704",
            "5.055294131",
            "4.6801830169",
            "4.7575126779",
            "5.1152794343",
            "5.6706255368",
            "7.0637629803",
            "6.9601867069",
            "6.9601866461",
            "6.9601866601",
            "6.9601866868",
            "6.2381090133",
            "5.0207926076",
            "4.6846825941",
            "4.2001810624",
            "4.2001808673",
            "4.2001809409",
            "4.2001810978"
          ],
          "stack": "A",
          "type": "bar",
          "name": "VPC($)"
        },
        {
          "data": [
            "",
            "",
            "",
            "2.1432013976",
            "0.7100075936",
            "3.2618332947",
            "1.1451264124",
            "1.3153026722",
            "",
            "",
            "",
            "0.425004894",
            "",
            "",
            "1.8497259342",
            "",
            "0.5900026561",
            "0.9837298435",
            "3.4998503066",
            "9.7514224615",
            "9.1872946252",
            "9.1840317239",
            "9.189243742",
            "9.1826298054",
            "6.3993466477",
            "0.6650108174",
            "0.0500057857",
            "",
            "",
            "",
            ""
          ],
          "stack": "A",
          "type": "bar",
          "name": "Elastic Load Balancing($)"
        },
        {
          "data": [
            "2.1379277736",
            "2.1379277736",
            "2.1379277736",
            "2.1379277736",
            "2.1379277736",
            "2.1379277736",
            "2.1918657047",
            "2.1481667642",
            "2.1477001104",
            "2.1477001104",
            "2.1477001104",
            "2.2679845341",
            "2.1679994376",
            "2.2606420193",
            "2.3001468318",
            "2.2058020656",
            "2.3079730192",
            "2.3207690791",
            "2.2408946544",
            "2.2408946544",
            "2.2408946544",
            "2.2408946544",
            "2.2408946544",
            "2.2408946544",
            "2.2414088059",
            "2.2409847096",
            "2.2409847096",
            "2.2409847096",
            "2.2409847096",
            "2.2409847096",
            "2.2409847096"
          ],
          "stack": "A",
          "type": "bar",
          "name": "EC2 Container Registry (ECR)($)"
        },
        {
          "data": [
            "0.8435985324",
            "0.8434459056",
            "0.8435598554",
            "2.4367199246",
            "2.760353139",
            "0.9748370634",
            "3.0712957877",
            "2.0834767477",
            "0.8467598692",
            "0.8466808098",
            "0.8468157828",
            "1.9752019221",
            "0.84881735",
            "0.8486201899",
            "5.491367504",
            "0.8500620363",
            "2.5371958991",
            "0.9458895053",
            "1.0021895832",
            "4.7399286391",
            "1.0664645192",
            "1.0680392064",
            "1.0675873487",
            "1.0673600546",
            "1.8947541211",
            "3.8922186055",
            "0.8436583067",
            "0.8433197168",
            "0.8432932127",
            "0.8431753883",
            "0.8434763519"
          ],
          "stack": "A",
          "type": "bar",
          "name": "S3($)"
        },
        {
          "data": [
            "0.00061275",
            "",
            "",
            "1.129418528",
            "0.736769667",
            "0.774455612",
            "0.539634056",
            "0.788326806",
            "",
            "",
            "",
            "0.510868861",
            "0.059234999",
            "",
            "1.449562028",
            "",
            "0.550200417",
            "2.884253166",
            "1.041464638",
            "2.974137666",
            "2.4",
            "2.4",
            "2.4",
            "2.4",
            "2.140103889",
            "0.694569389",
            "0.238379472",
            "2.4",
            "2.4",
            "2.4",
            "2.4"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Elastic Container Service for Kubernetes($)"
        },
        {
          "data": [
            "0.0823888076",
            "0.1004468944",
            "0.100446624",
            "0.5922561448",
            "0.3072207135",
            "0.4895396508",
            "0.3274965548",
            "0.3739237461",
            "0.1976138715",
            "0.1976131675",
            "0.1976124724",
            "0.3479270431",
            "0.2171795089",
            "0.2040826712",
            "0.6489073472",
            "0.2042169896",
            "0.388055235",
            "1.0021497461",
            "0.6550771952",
            "1.3227067084",
            "1.1567487557",
            "1.1575382664",
            "1.1578356861",
            "1.1578586534",
            "1.0874198891",
            "0.5070625613",
            "0.2813891561",
            "0.2152320119",
            "0.2137131687",
            "0.2146329185",
            "0.2159507604"
          ],
          "stack": "A",
          "type": "bar",
          "name": "CloudWatch($)"
        },
        {
          "data": [
            "0.1548637096",
            "0.1548687096",
            "0.1548437096",
            "0.1548487096",
            "0.1548587096",
            "0.1548637096",
            "0.1548687096",
            "0.1548437096",
            "0.1548487096",
            "0.1548587096",
            "0.1548637096",
            "0.1548687096",
            "0.1548437096",
            "0.1548487096",
            "0.1548587096",
            "0.1548637096",
            "0.1548687096",
            "0.1548437096",
            "0.1483970967",
            "0.1548587096",
            "0.1548637096",
            "0.1548687096",
            "0.1548437096",
            "0.1548487096",
            "0.1548587096",
            "0.1548637096",
            "0.1548687096",
            "0.1548437096",
            "0.1548487096",
            "0.1548587096",
            "0.1548637096"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Secrets Manager($)"
        },
        {
          "data": [
            "0.096774192",
            "0.096774192",
            "0.096774192",
            "0.084677418",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.061827956",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.061827956",
            "0.061827956",
            "0.064516128",
            "0.064516128",
            "0.061827956",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.061827956",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128",
            "0.064516128"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Key Management Service($)"
        },
        {
          "data": [
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214",
            "0.0621507214"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Relational Database Service($)"
        },
        {
          "data": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0.078",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936",
            "0.0936"
          ],
          "stack": "A",
          "type": "bar",
          "name": "DynamoDB($)"
        },
        {
          "data": [
            "0.2",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          "stack": "A",
          "type": "bar",
          "name": "Route 53($)"
        },
        {
          "data": [
            "0.0000001575",
            "0.0000001575",
            "0.0000001575",
            "0.0007996167",
            "0.0000116323",
            "0.0014263752",
            "0.0002992314",
            "0.0004201459",
            "0.0000001575",
            "0.0000001575",
            "0.0000001575",
            "0.0000070786",
            "0.0000001644",
            "0.0000001575",
            "0.001102368",
            "0.0000001575",
            "0.0000089562",
            "0.0016542795",
            "0.0061263946",
            "0.0204651149",
            "0.0207507827",
            "0.0215094411",
            "0.0220026309",
            "0.022596519",
            "0.0143472301",
            "0.000014981",
            "0.0001638503",
            "0.0000001575",
            "0.0000001575",
            "0.0000001575",
            "0.0000001575"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Elastic File System($)"
        },
        {
          "data": [
            "0.000000259",
            "0.0000002597",
            "0.000000259",
            "0.000000259",
            "0.0000005266",
            "0.0000002593",
            "0.0000002593",
            "0.0000002593",
            "0.0000002593",
            "0.000000259",
            "0.0000002593",
            "0.000000259",
            "0.0000002593",
            "0.000000259",
            "0.000000263",
            "0.0000002593",
            "0.000000259",
            "0.0000002593",
            "0.0000002593",
            "0.0000002593",
            "0.0000008664",
            "0.0000002593",
            "0.0000002593",
            "0.0000002593",
            "0.000000259",
            "0.0000002593",
            "0.0000002593",
            "0.0000003149",
            "0.000000259",
            "0.000000259",
            "0.000000259"
          ],
          "stack": "A",
          "type": "bar",
          "name": "SNS($)"
        },
        {
          "data": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0.0000000114"
          ],
          "stack": "A",
          "type": "bar",
          "name": "SQS($)"
        },
        {
          "data": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
          ],
          "stack": "A",
          "type": "bar",
          "name": "CloudTrail($)"
        },
        {
          "data": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Glue($)"
        },
        {
          "data": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Lambda($)"
        },
        {
          "data": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Migration Hub Refactor Spaces($)"
        },
        {
          "data": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
          ],
          "stack": "A",
          "type": "bar",
          "name": "Location Service($)"
        }
      ]
    };
    setSeriesData(data.graphData);
    setXAxisData(data.xAxisData);
  }, []);


  return (
    <div style={{ width: "100vw", height: "100vh", overflow: 'hidden' }}>
        <ReactECharts
          style={{ width: "100%", height: "100%" }}
          option={{
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            xAxis: [
              {
                type: "category",
                data: xAxisData,
              },
            ],
            yAxis: [
              {
                type: "value",
              },
            ],
            series: seriesData,
          }}
        />
    </div>
  )
}

export default App
