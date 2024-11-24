export interface AttendanceRecord {
  id: number;
  date: string;
  time: string;
  signInStateStr: string;
  signInState: string;
  beLateTime: string;
  thanTheWay: string;
  commuterTimeName: string;
  signInType: number;
}

export const mockAttendanceData: AttendanceRecord[][] = [
  [
    {
      id: 2186348,
      date: "2024-10-21",
      time: "08:32:28",
      signInState: "34",
      signInStateStr: "迟到",
      beLateTime: "0小时2分28秒",
      thanTheWay: "人脸",
      commuterTimeName: "五一后正常上午班",
      signInType: 2
    },
    {
      id: 2186345,
      date: "2024-10-21",
      time: "08:28:34",
      signInState: "38",
      signInStateStr: "正常签到",
      beLateTime: "0",
      thanTheWay: "人脸",
      commuterTimeName: "五一后正常上午班",
      signInType: 1
    }
  ],
  [
    {
      id: 2184089,
      date: "2024-10-18",
      time: "18:18:10",
      signInState: "37",
      signInStateStr: "加班",
      beLateTime: "0",
      thanTheWay: "人脸",
      commuterTimeName: "五一后正常下午班",
      signInType: 2
    },
    {
      id: 2184061,
      date: "2024-10-18",
      time: "08:40:08",
      signInState: "34",
      signInStateStr: "迟到",
      beLateTime: "0",
      thanTheWay: "人脸",
      commuterTimeName: "五一后正常上午班",
      signInType: 2
    },
    {
      id: 2184057,
      date: "2024-10-18",
      time: "08:30:03",
      signInState: "34",
      signInStateStr: "迟到",
      beLateTime: "0小时0分3秒",
      thanTheWay: "人脸",
      commuterTimeName: "五一后正常上午班",
      signInType: 1
    }
  ]
];