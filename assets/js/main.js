(async () => {
    try {
        const profileData = await fetchProfileData()
        updateProfileInfo(profileData)
        updateSoftSkills(profileData)
        updateHardSkills(profileData)
        updateLanguages(profileData)
        updatePotfolio(profileData)
        updateExperience(profileData)
    } catch(error) {
        console.error('Erro ao buscar ou atualizar dados:', error)
    }
})()

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = `Foto de perfil do ${profileData.name}`
    photo.title = `Foto de perfil do ${profileData.name}`

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

const createItems = (data, templateFunction) => {
    return data.map(item => templateFunction(item)).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkillsName');
    if (hardSkills) {
        hardSkills.innerHTML = createItems(
            profileData.skills.hardSkills,
            skill => `
                <i class="${skill.name}" alt="Icone do ${skill.name}" title="Icone do ${skill.name}"></i>
            `
        )
    }
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    if (softSkills) {
        softSkills.innerHTML = createItems(
            profileData.skills.softSkills,skill => `
                <li>${skill}</li>
            `)
    }
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    if (languages) {
        languages.innerHTML = createItems(
            profileData.languages,language => `
            <li>${language}</li>
            `
        )
    }
}

function updatePotfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    if (portfolio) {
        portfolio.innerHTML = createItems(
            profileData.portfolio,project => `
                <li>
                    <a href="${project.github}" target="_blank">
                        <span class="acordeon__portfolio-title github">${project.name}</span>
                    </a>
                    <a class="acordeon__portfolio-link" href="${project.url}" target="_blank">${project.url}</a>
                </li>
            `
        )
    }
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience')
    if (experience) {
        experience.innerHTML = createItems(
            profileData.professionalExperience,exp => `
                <li>
                    <h3 class="acordeon__experience-title">${exp.name}</h3>
                    <span class="acordeon__experience-period calendar">${exp.period}</span>
                    <p class="acordeon__experience-p">${exp.description}</p>
                </li>
            `
        )
    }
}

