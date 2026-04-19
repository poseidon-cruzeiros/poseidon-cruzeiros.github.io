$utf8NoBom = New-Object System.Text.UTF8Encoding $False
Get-ChildItem -Path "d:\Claude Code - Projetos\Poseidon Cruzeiros" -File -Recurse -Include *.html,*.xml,*.txt,*.md | ForEach-Object {
    if ($_.FullName -notmatch "\.git\\") {
        $content = [System.IO.File]::ReadAllText($_.FullName)
        if ($content.Contains("https://poseidon-cruzeiros.github.io")) {
            Write-Host "Updating $($_.FullName)"
            $newContent = $content.Replace("https://poseidon-cruzeiros.github.io", "https://poseidoncruzeiros.com.br")
            [System.IO.File]::WriteAllText($_.FullName, $newContent, $utf8NoBom)
        }
    }
}
Write-Host "Done!"
