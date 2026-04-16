/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    /** @type {import('./structure').RobotsTxt} */
    const result = {
        agents: {},
        Sitemap: []
    };

    /** @type {string[]} */
    let currentAgents = [];

    const lines = String(text).split(/\r?\n/);

    for (const rawLine of lines) {
        const noComment = rawLine.split('#')[0].trim();
        if (noComment.length === 0) {
            continue;
        }

        const separatorIndex = noComment.indexOf(':');
        if (separatorIndex === -1) {
            continue;
        }

        const key = noComment.slice(0, separatorIndex).trim().toLowerCase();
        const value = noComment.slice(separatorIndex + 1).trim();

        if (key === 'user-agent') {
            const agentName = value.toLowerCase();
            if (!result.agents[agentName]) {
                result.agents[agentName] = {
                    Allow: [],
                    Disallow: []
                };
            }
            currentAgents = [agentName];
            continue;
        }

        if (key === 'allow' || key === 'disallow') {
            if (currentAgents.length === 0) {
                continue;
            }

            for (const agentName of currentAgents) {
                const targetKey = key === 'allow' ? 'Allow' : 'Disallow';
                if (value !== '') {
                    result.agents[agentName][targetKey].push(value);
                }
            }
            continue;
        }

        if (key === 'sitemap') {
            if (value !== '') {
                result.Sitemap.push(value);
            }
            continue;
        }

        if (key === 'host') {
            if (value !== '') {
                result.Host = value;
            }
        }
    }

    return result;
}

module.exports = parseRobots;