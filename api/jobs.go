package main

import (
    "encoding/json"
    "io/ioutil"
    "log"
    "net/http"
    "os"
)

type SrcJob struct {
    Id               string `json:"id"`
    TeamId           string `json:"team_id"`
    Title            string `json:"title"`
    CountryId        string `json:"country_id"`
    City             string `json:"city"`
    State            string `json:"state"`
    Zip              string `json:"zip"`
    Department       string `json:"department"`
    Description      string `json:"description"`
    MinimumSalary    string `json:"minimum_salary"`
    MaximumSalary    string `json:"maximum_salary"`
    Notes            string `json:"notes"`
    OriginalOpenDate string `json:"original_open_date"`
    Type             string `json:"type"`
    Status           string `json:"status"`
    SendToJobBoards  string `json:"send_to_job_boards"`
    HiringLead       string `json:"hiring_lead"`
    BoardCode        string `json:"board_code"`
    InternalCode     string `json:"internal_code"`
    Questionnaire    string `json:"questionnaire"`
}

type JobsItem struct {
    Id               string `json:"id"`
    Title            string `json:"title"`
    City             string `json:"city"`
    State            string `json:"state"`
    Type             string `json:"type"`
    BoardCode        string `json:"board_code"`
}

type Jobs []JobsItem

func ServeHTTP(w http.ResponseWriter, r *http.Request) {

    url := os.Getenv("GATSBY_JAZZ_URL")

    if len(url) > 0 {

      response, err := http.Get(url)
      if err != nil {
          log.Fatal(err)
      }
      defer response.Body.Close()
 
      responseData, err := ioutil.ReadAll(response.Body)
      if err != nil {
          log.Fatal(err)
      }

      var jobs []SrcJob
      json.Unmarshal([]byte(string(responseData)), &jobs)

      var jobItems []JobsItem

      for i := 0; i < len(jobs); i++ {
        job := JobsItem{
          Id:        jobs[i].Id,
          Title:     jobs[i].Title,
          City:      jobs[i].City,
          State:     jobs[i].State,
          Type:      jobs[i].Type,
          BoardCode: jobs[i].BoardCode,
        }
        jobItems = append(jobItems, job)
      }

      j, err := json.Marshal(jobItems)
      if err != nil {
        log.Fatal(err)
      }
      s := string(j)
      w.Write([]byte(s))
  }
}

func main() {
    http.HandleFunc("/", ServeHTTP)
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}
