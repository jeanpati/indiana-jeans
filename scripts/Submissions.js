export const SubmissionList = async () => {
  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();

  // Iterate the submissions and create some <section> representations
  let submissionHTML = "";
  // for (const submission of submissions) {
  //     submissionHTML += `<section class="submission">
  //         <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
  //         <div>Area type foreign key? ${submission.socioLocationId}</div>
  //     </section>`
  // }

  // // Return the HTML string
  // return submissionHTML

  submissions.map((submission) => {
    submissionHTML += `<section class="submission">
        <div> Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area Type Foreign Key: ${submission.socioLocationId}</div>
    </section>`;
  });

  // Return the HTML string
  return submissionHTML;
};
