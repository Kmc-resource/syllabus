const syllabusLinks = {
    'Zoology': {
        '1st Year': {
            '1st Sem': 'https://drive.google.com/file/d/1iPbCCsSKPqYYo1d5LDIdcENBfnTA_84u/view?usp=drive_link',
            '2nd Sem': 'https://drive.google.com/file/d/1ClfHbKDU4bvoPsR5hmPWwRjdOdYPMgNh/view?usp=drive_link'
        },
        '2nd Year': {
            '3rd Sem': 'https://drive.google.com/file/d/1KLanzAdaUTvM86fqhhHzXuaJr39hgx7O/view?usp=drive_link',
            '4th Sem': 'https://drive.google.com/file/d/1kGygTIITaOo4WT1kIO5Y-GxfdQYeh908/view?usp=sharing'
        },
        '3rd Year': {
            '5th Sem': 'https://example.com/zoology-3rd-year-5th-sem.pdf',
            '6th Sem': 'https://example.com/zoology-3rd-year-6th-sem.pdf'
        },
        '4th Year': {
            '7th Sem': 'https://example.com/zoology-4th-year-7th-sem.pdf',
            '8th Sem': 'https://example.com/zoology-4th-year-8th-sem.pdf'
        }
    },
    'Botany': {
        '1st Year': {
            '1st Sem': 'https://example.com/botany-1st-year-1st-sem.pdf',
            '2nd Sem': 'https://example.com/botany-1st-year-2nd-sem.pdf'
        },
        '2nd Year': {
            '3rd Sem': 'https://example.com/botany-2nd-year-3rd-sem.pdf',
            '4th Sem': 'https://example.com/botany-2nd-year-4th-sem.pdf'
        },
        '3rd Year': {
            '5th Sem': 'https://example.com/botany-3rd-year-5th-sem.pdf',
            '6th Sem': 'https://example.com/botany-3rd-year-6th-sem.pdf'
        },
        '4th Year': {
            '7th Sem': 'https://example.com/botany-4th-year-7th-sem.pdf',
            '8th Sem': 'https://example.com/botany-4th-year-8th-sem.pdf'
        }
    },
    // Add similar structure for other subjects...
};

function updateSemesters() {
    const year = document.getElementById('year').value;
    const semesterSelect = document.getElementById('semester');
    semesterSelect.innerHTML = ''; // Clear previous options

    let semesters = [];

    if (year === '1st Year') {
        semesters = ['1st Sem', '2nd Sem'];
    } else if (year === '2nd Year') {
        semesters = ['3rd Sem', '4th Sem'];
    } else if (year === '3rd Year') {
        semesters = ['5th Sem', '6th Sem'];
    } else if (year === '4th Year') {
        semesters = ['7th Sem', '8th Sem'];
    }

    // Populate the semester dropdown
    semesters.forEach(sem => {
        const option = document.createElement('option');
        option.value = sem;
        option.textContent = sem;
        semesterSelect.appendChild(option);
    });
}

function redirectToSyllabus(event) {
    event.preventDefault(); // Prevent form submission
    const subject = document.getElementById('subject').value;
    const year = document.getElementById('year').value;
    const semester = document.getElementById('semester').value;

    if (subject && year && semester) {
        const link = syllabusLinks[subject][year][semester];
        window.location.href = link; // Redirect to the syllabus link
    } else {
        alert('Please select all fields.');
    }
}